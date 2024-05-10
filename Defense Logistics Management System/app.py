# app.py
from flask import Flask, jsonify, request

app = Flask(__name__)

# Dummy data for demonstration
inventory = []

@app.route('/inventory', methods=['GET'])
def get_inventory():
    return jsonify(inventory)

@app.route('/inventory', methods=['POST'])
def add_item():
    item = request.json
    inventory.append(item)
    return jsonify({'message': 'Item added successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
