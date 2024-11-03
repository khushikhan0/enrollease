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

@app.route('/api/auth/signup', methods=['POST'])
def signUp():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    first_name = data.get('firstName')
    last_name = data.get('lastName')

    reponse = supabase.auth.sign_up (
        {"email": email, "password": password}
    )
    

@app.route('/favicon.ico')
def favicon():
    return "", 204  # No content response    

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode