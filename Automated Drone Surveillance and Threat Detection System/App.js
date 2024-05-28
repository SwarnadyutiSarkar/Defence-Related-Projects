import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const fetchAlerts = async () => {
            const response = await axios.get('http://localhost:3000/alerts');
            setAlerts(response.data);
        };

        fetchAlerts();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Drone Surveillance Dashboard</h1>
            </header>
            <main>
                <div className="video-feed">
                    <h2>Live Drone Feed</h2>
                    <video src="drone_feed.mp4" controls autoPlay loop />
                </div>
                <div className="alerts">
                    <h2>Threat Alerts</h2>
                    <ul>
                        {alerts.map(alert => (
                            <li key={alert.id}>
                                {alert.message} - {new Date(alert.timestamp).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default App;
