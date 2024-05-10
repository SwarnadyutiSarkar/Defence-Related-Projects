// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchCommunicationLogs();
});

async function fetchCommunicationLogs() {
    try {
        const response = await fetch('http://localhost:5000/communication-logs');
        const communicationLogs = await response.json();

        const communicationLogListDiv = document.getElementById('communicationLogList');
        communicationLogListDiv.innerHTML = '';

        communicationLogs.forEach(log => {
            const logDiv = document.createElement('div');
            logDiv.innerHTML = `
                <p>Timestamp: ${log.timestamp}</p>
                <p>Satellite ID: ${log.satellite_id}</p>
                <p>Message: ${log.message}</p>
            `;
            communicationLogListDiv.appendChild(logDiv);
        });
    } catch (error) {
        console.error('Error fetching communication logs:', error);
    }
}
