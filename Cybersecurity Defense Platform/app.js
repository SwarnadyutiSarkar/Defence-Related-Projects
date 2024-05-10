// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchAlerts();
});

async function fetchAlerts() {
    try {
        const response = await fetch('http://localhost:5000/alerts');
        const alerts = await response.json();

        const alertListDiv = document.getElementById('alertList');
        alertListDiv.innerHTML = '';

        alerts.forEach(alert => {
            const alertDiv = document.createElement('div');
            alertDiv.innerHTML = `
                <p>ID: ${alert.id}</p>
                <p>Severity: ${alert.severity}</p>
                <p>Description: ${alert.description}</p>
            `;
            alertListDiv.appendChild(alertDiv);
        });
    } catch (error) {
        console.error('Error fetching alerts:', error);
    }
}
