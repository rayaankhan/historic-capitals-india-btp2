import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet's CSS is imported
import "./App.css"; // Import your custom styles if needed

function App() {
  const places = [
    {
      name: "Place 1",
      location: [51.505, -0.09],
      details: "Details of Place 1",
    },
    { name: "Place 2", location: [51.51, -0.1], details: "Details of Place 2" },
    {
      name: "Place 3",
      location: [51.515, -0.095],
      details: "Details of Place 3",
    },
    // Add more places as needed
  ];

  return (
    <div className="App">
      <header>
        <h1 className="title">Interactive Map with List</h1>
      </header>
      <div className="main-content">
        <div className="map-container">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={2}
            style={{ height: "600px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map((place, index) => (
              <Marker key={index} position={place.location}>
                <Popup>{place.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="places-list">
          <h2>Places List</h2>
          <ul>
            {places.map((place, index) => (
              <li key={index}>
                <a href="https://www.google.com">{place.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
