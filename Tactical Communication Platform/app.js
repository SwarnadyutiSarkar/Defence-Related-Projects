// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchMessages();

    document.getElementById('messageForm').addEventListener('submit', sendMessage);
});

async function fetchMessages() {
    try {
        const response = await fetch('/messages');
        const messages = await response.json();

        const messageListDiv = document.getElementById('messageList');
        messageListDiv.innerHTML = '';

        messages.forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.innerHTML = `
                <p>${message.sender}: ${message.text}</p>
            `;
            messageListDiv.appendChild(messageDiv);
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
}

async function sendMessage(event) {
    event.preventDefault();

    const messageInput = document.getElementById('messageInput').value;

    try {
        await fetch('/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sender: 'User', // Dummy sender name
                text: messageInput
            })
        });
        fetchMessages();
        document.getElementById('messageInput').value = '';
    } catch (error) {
        console.error('Error sending message:', error);
    }
}
