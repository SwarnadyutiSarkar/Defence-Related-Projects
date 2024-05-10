# app.py
from flask import Flask, jsonify

app = Flask(__name__)

# Dummy geospatial data for demonstration
geospatial_data = [
    {'latitude': 37.7749, 'longitude': -122.4194, 'info': 'Location A'},
    {'latitude': 37.7750, 'longitude': -122.4195, 'info': 'Location B'},
    {'latitude': 37.7751, 'longitude': -122.4196, 'info': 'Location C'}
]

@app.route('/geospatial-data', methods=['GET'])
def get_geospatial_data():
    return jsonify(geospatial_data)

if __name__ == '__main__':
    app.run(debug=True)
