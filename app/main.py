from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.prompts import ChatPromptTemplate, PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_community.chat_models import ChatOllama
from langchain_core.runnables import RunnablePassthrough
from langchain.retrievers.multi_query import MultiQueryRetriever
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import UnstructuredPDFLoader

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize the model
local_model = "mistral"  # Your model name
llm = ChatOllama(model=local_model)

local_path = "Materials/CSCatalog.pdf"

# Local PDF file uploads
if local_path:
  loader = UnstructuredPDFLoader(file_path=local_path)
  data = loader.load()
else:
  print("Upload a PDF file")


text_splitter = RecursiveCharacterTextSplitter(chunk_size=7500, chunk_overlap=100)
chunks = text_splitter.split_documents(data)


# Define the query prompt template for generating alternative questions
QUERY_PROMPT = PromptTemplate(
    input_variables=["question"],
    template="You are an AI language model assistant. Your task is to generate five different versions of the given user question to retrieve relevant documents from a vector database. By generating multiple perspectives on the user question, your goal is to help the user overcome some of the limitations of the distance-based similarity search. Provide these alternative questions separated by newlines. Original question: {question}"
)

# Create the MultiQueryRetriever
persist_directory = "../chroma_db"
vector_db = Chroma.from_documents(
    documents = chunks,
    embedding= OllamaEmbeddings(model="nomic-embed-text",show_progress=True),
    collection_name="local-rag",
    persist_directory=persist_directory
)

# Define your RAG prompt
template = """Answer the question based ONLY on the following context:
{context}
Question: {question}
"""
QUERY_PROMPT = PromptTemplate(
    input_variables=["question"],
    template="""You are an AI language model assistant. Your task is to generate five
    different versions of the given user question to retrieve relevant documents from
    a vector database. By generating multiple perspectives on the user question, your
    goal is to help the user overcome some of the limitations of the distance-based
    similarity search. Provide these alternative questions separated by newlines.
    Original question: {question}""",
)

retriever = MultiQueryRetriever.from_llm(
    vector_db.as_retriever(), 
    llm,
    prompt=QUERY_PROMPT
)

prompt = ChatPromptTemplate.from_template(template)

# Set up the processing chain
chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

@app.route('/api/ask', methods=['POST'])
def ask_model():
    # Get the user input from the request
    data = request.json
    question = data.get('question')

    # Use your processing chain to get the answer
    answer = chain.invoke({"question": question})

    # Return the response as JSON
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)