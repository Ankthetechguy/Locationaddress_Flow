import React, { useState } from "react";

const LocationPermission = () => {
  const [mode, setMode] = useState(null); // Keeps track of user selection (null, "manual", "enable")
  const [manualLocation, setManualLocation] = useState("");

  const requestLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
      },
      () => alert("Location permission denied.")
    );
  };

  return (
    <div>
      <h2>Location Selection</h2>
      {!mode && (
        <>
          <button onClick={() => setMode("enable")}>Enable Location</button>
          <button onClick={() => setMode("manual")}>Search Manually</button>
        </>
      )}

      {mode === "enable" && (
        <div>
          <h3>Enable Location</h3>
          <button onClick={requestLocation}>Allow Location Access</button>
          <button onClick={() => setMode(null)}>Back</button>
        </div>
      )}

      {mode === "manual" && (
        <div>
          <h3>Enter Address Manually</h3>
          <input
            type="text"
            placeholder="Enter your location"
            value={manualLocation}
            onChange={(e) => setManualLocation(e.target.value)}
          />
          <button
            onClick={() => alert(`Manual Location: ${manualLocation}`)}
          >
            Submit Location
          </button>
          <button onClick={() => setMode(null)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default LocationPermission;
