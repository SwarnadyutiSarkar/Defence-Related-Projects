# app.py
from flask import Flask, jsonify, request

app = Flask(__name__)

# Dummy biometric data for demonstration
users = [
    {'id': 1, 'name': 'John Doe', 'fingerprint': 'fingerprint_data_1'},
    {'id': 2, 'name': 'Jane Smith', 'fingerprint': 'fingerprint_data_2'}
]

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/authenticate', methods=['POST'])
def authenticate_user():
    fingerprint_data = request.json['fingerprint']

    for user in users:
        if user['fingerprint'] == fingerprint_data:
            return jsonify({'authenticated': True, 'user': user})
    
    return jsonify({'authenticated': False, 'user': None})

if __name__ == '__main__':
    app.run(debug=True)
