// app.js
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('authenticationForm').addEventListener('submit', authenticateUser);
});

async function authenticateUser(event) {
    event.preventDefault();

    const fingerprintInput = document.getElementById('fingerprintInput').value;

    try {
        const response = await fetch('http://localhost:5000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fingerprint: fingerprintInput })
        });
        const data = await response.json();

        const authenticationResultDiv = document.getElementById('authenticationResult');
        if (data.authenticated) {
            authenticationResultDiv.innerHTML = `
                <p>Authentication successful for user: ${data.user.name}</p>
            `;
        } else {
            authenticationResultDiv.innerHTML = `
                <p>Authentication failed. Please try again.</p>
            `;
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
    }
}
