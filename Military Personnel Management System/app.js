// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchPersonnel();
});

async function fetchPersonnel() {
    try {
        const response = await fetch('/personnel');
        const personnelList = await response.json();

        const personnelListDiv = document.getElementById('personnelList');
        personnelListDiv.innerHTML = '';

        personnelList.forEach(personnel => {
            const personnelDiv = document.createElement('div');
            personnelDiv.innerHTML = `
                <h3>${personnel.name}</h3>
                <p>ID: ${personnel.id}</p>
                <p>Rank: ${personnel.rank}</p>
            `;
            personnelListDiv.appendChild(personnelDiv);
        });
    } catch (error) {
        console.error('Error fetching personnel:', error);
    }
}
