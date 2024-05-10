// app.js
document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
});

function initializeMap() {
    fetchGeospatialData()
        .then(data => {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: data[0].latitude, lng: data[0].longitude },
                zoom: 12
            });

            data.forEach(point => {
                const marker = new google.maps.Marker({
                    position: { lat: point.latitude, lng: point.longitude },
                    map: map,
                    title: point.info
                });
            });
        })
        .catch(error => {
            console.error('Error fetching geospatial data:', error);
        });
}

async function fetchGeospatialData() {
    try {
        const response = await fetch('http://localhost:5000/geospatial-data');
        const geospatialData = await response.json();
        return geospatialData;
    } catch (error) {
        throw new Error('Error fetching geospatial data');
    }
}
