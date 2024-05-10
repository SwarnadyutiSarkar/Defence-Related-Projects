from flask import Flask, jsonify, request

app = Flask(__name__)

# Dummy data for demonstration
messages = []

@app.route('/messages', methods=['GET'])
def get_messages():
    return jsonify(messages)

@app.route('/messages', methods=['POST'])
def add_message():
    message = request.json
    messages.append(message)
    return jsonify({'message': 'Message added successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
