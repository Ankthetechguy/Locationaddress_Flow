import React from "react";

const LocationPermission = () => {
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
      <h2>Location Permission</h2>
      <button onClick={requestLocation}>Enable Location</button>
    </div>
  );
};

export default LocationPermission;
