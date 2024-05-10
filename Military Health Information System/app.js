// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchHealthRecords();
});

async function fetchHealthRecords() {
    try {
        const response = await fetch('http://localhost:8000/health-records');
        const healthRecords = await response.json();

        const healthRecordListDiv = document.getElementById('healthRecordList');
        healthRecordListDiv.innerHTML = '';

        healthRecords.forEach(record => {
            const recordDiv = document.createElement('div');
            recordDiv.innerHTML = `
                <p>ID: ${record.id}</p>
                <p>Name: ${record.name}</p>
                <p>Gender: ${record.gender}</p>
                <p>Age: ${record.age}</p>
                <p>Blood Type: ${record.bloodType}</p>
            `;
            healthRecordListDiv.appendChild(recordDiv);
        });
    } catch (error) {
        console.error('Error fetching health records:', error);
    }
}
