// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchInventory();

    document.getElementById('itemForm').addEventListener('submit', addItem);
});

async function fetchInventory() {
    try {
        const response = await fetch('/inventory');
        const inventory = await response.json();

        const inventoryListDiv = document.getElementById('inventoryList');
        inventoryListDiv.innerHTML = '';

        inventory.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <p>${item.name}</p>
            `;
            inventoryListDiv.appendChild(itemDiv);
        });
    } catch (error) {
        console.error('Error fetching inventory:', error);
    }
}

async function addItem(event) {
    event.preventDefault();

    const itemInput = document.getElementById('itemInput').value;

    try {
        await fetch('/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: itemInput
            })
        });
        fetchInventory();
        document.getElementById('itemInput').value = '';
    } catch (error) {
        console.error('Error adding item:', error);
    }
}
