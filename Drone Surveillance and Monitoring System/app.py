# app.py
from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Load dummy surveillance data (replace this with actual data)
data = pd.DataFrame({
    'timestamp': ['2022-01-01 12:00:00', '2022-01-01 12:15:00', '2022-01-01 12:30:00'],
    'latitude': [37.7749, 37.7750, 37.7751],
    'longitude': [-122.4194, -122.4195, -122.4196],
    'altitude': [100, 110, 105],
    'status': ['Normal', 'Normal', 'Anomaly']
})

@app.route('/surveillance-data', methods=['GET'])
def get_surveillance_data():
    return jsonify(data.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
