import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet's CSS is imported

function Map({ sharedVariable, setSharedVariable }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [ancientData, setAncientData] = useState([]);
  const [location, setLocation] = useState({});
  const markersRef = useRef([]);
  const [mapCenter, setMapCenter] = useState([23.512, 80.329]);
  const [mapZoom, setMapZoom] = useState(4);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    fetch("/data/ancient/location.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLocation(data); // Store the entire data object
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // Ensure this effect runs only once

  useEffect(() => {
    fetch("/data/ancient/ancient.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAncientData(data.points);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // Ensure this effect runs only once

  const handlePlaceClick = (index) => {
    const marker = markersRef.current[index];
    if (marker) {
      // Check if marker is defined
      const latLng = marker.getLatLng();

      setMapCenter(latLng);
      setMapZoom(6);
      console.log("here", ancientData[0]['information'])
      setSharedVariable({"information": ancientData[index]['information'], "location": ancientData[index]['city'], "era": ancientData[index]['year']})
      marker.openPopup();
    } else {
      console.error("Marker not found at index:", index);
    }
  };

  // This component updates the map center and zoom
  const MapController = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center text-blue-400 mx-5 rounded-md md:space-x-3 md:space-y-0 h-[70vh]">
      <div
        className={`bg-slate-200 rounded-lg md:mb-0 md:w-9/12 w-full h-full align-middle overflow-hidden z-0`}
      >
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: "700px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapController center={mapCenter} zoom={mapZoom} />{" "}
          {/* This ensures the map updates */}
          {ancientData.map((place, index) => {
            const coordinates = location[place.city];
            if (coordinates) {
              // Check if coordinates exist
              return (
                <Marker
                  key={index}
                  position={coordinates}
                  ref={(el) => (markersRef.current[index] = el)} // Store marker reference
                  eventHandlers={{
                    click: () => handlePlaceClick(index), // Handle click event
                  }}
                >
                  <Popup>{place.city}</Popup>
                </Marker>
              );
            }
            return null; // Don't render a marker if coordinates are missing
          })}
        </MapContainer>
      </div>

      <div
        className={`bg-slate-200 opacity-60 rounded-lg md:w-3/12 w-4/5 md:h-full text-black ${
          isSidebarVisible
            ? "absolute top-0 right-0 h-full w-3/5 z-30"
            : "hidden md:block"
        } justify-center`}
      >
        <div className="flex justify-center text-xl font-bold py-4">
          LOCATIONS LIST
        </div>
        <button className="z-30 md:hidden absolute top-1/2 -left-10 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded" onClick={toggleSidebar}>{isSidebarVisible ? ">" : "<"}</button>
        <div className="places-list px-4 overflow-y-auto h-5/6">
          <ul className="space-y-2">
            {ancientData.map((place, index) => (
              <li key={index} className="text-black">
                <a href="#" onClick={() => handlePlaceClick(index)}>
                  {index + 1}. {place.city}
                </a>
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
