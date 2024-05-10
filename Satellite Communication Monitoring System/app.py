# app.py
from flask import Flask, jsonify

app = Flask(__name__)

# Dummy data for demonstration
communication_logs = [
    {'timestamp': '2024-05-10 10:00:00', 'satellite_id': 1, 'message': 'Communication established'},
    {'timestamp': '2024-05-10 10:15:00', 'satellite_id': 2, 'message': 'Data transmission successful'},
    {'timestamp': '2024-05-10 10:30:00', 'satellite_id': 3, 'message': 'Anomaly detected'}
]

@app.route('/communication-logs', methods=['GET'])
def get_communication_logs():
    return jsonify(communication_logs)

if __name__ == '__main__':
    app.run(debug=True)
