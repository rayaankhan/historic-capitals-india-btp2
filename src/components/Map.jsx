import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet's CSS is imported
// import "../App.css"; // Import your custom styles if needed

function Map() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

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
    <div className="relative flex flex-col md:flex-row justify-center text-blue-400 mx-5 rounded-md md:space-x-3 md:space-y-0 h-[70vh]">
      <div
        className={`bg-slate-200 rounded-lg md:mb-0 md:w-8/12 w-full h-full align-middle overflow-hidden z-0`}
      >
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

      <div
        className={`bg-slate-200 opacity-50 rounded-lg md:w-4/12 w-4/5 md:h-full text-black ${
          isSidebarVisible
            ? "absolute top-0 right-0 h-full w-3/5 z-30"
            : "hidden md:block"
        } justify-center`}
      >
        LOCATIONS LIST
        <button
          className=" z-30 md:hidden absolute top-1/2 -left-10 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded"
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? ">" : "<"}
        </button>
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
      {!isSidebarVisible && (
        <button
          className="md:hidden absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded"
          onClick={toggleSidebar}
        >
          {"<"}
        </button>
      )}
    </div>
  );
}

export default Map;
