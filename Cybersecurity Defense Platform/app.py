# app.py
from flask import Flask, jsonify

app = Flask(__name__)

# Dummy data for demonstration
alerts = [
    {'id': 1, 'severity': 'High', 'description': 'Unauthorized access attempt detected'},
    {'id': 2, 'severity': 'Medium', 'description': 'Suspicious network activity detected'},
    {'id': 3, 'severity': 'Low', 'description': 'Potential malware detected'}
]

@app.route('/alerts', methods=['GET'])
def get_alerts():
    return jsonify(alerts)

if __name__ == '__main__':
    app.run(debug=True)
