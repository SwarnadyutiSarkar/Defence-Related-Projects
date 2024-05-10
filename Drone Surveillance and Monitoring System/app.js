// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchSurveillanceData();
});

async function fetchSurveillanceData() {
    try {
        const response = await fetch('http://localhost:5000/surveillance-data');
        const surveillanceData = await response.json();

        const timestamps = surveillanceData.map(record => record.timestamp);
        const altitudes = surveillanceData.map(record => record.altitude);
        const statuses = surveillanceData.map(record => record.status);

        const ctx = document.getElementById('surveillanceChart').getContext('2d');
        const surveillanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: timestamps,
                datasets: [{
                    label: 'Altitude',
                    data: altitudes,
                    borderColor: 'blue',
                    fill: false
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Drone Altitude Over Time'
                }
            }
        });
    } catch (error) {
        console.error('Error fetching surveillance data:', error);
    }
}
