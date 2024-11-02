from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

app = Flask(__name__)
CORS(app)

supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(supabase_url, supabase_key)

@app.route('/api/courses', methods=['GET'])
def getCourses():
    return jsonify(courses="hello")


if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode