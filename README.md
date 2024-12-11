# Locationaddress_Flow
This is a simple Location Flow application built with React and Node.js. The application allows users to select their delivery location by enabling geolocation or entering the location manually. It integrates with the Google Maps API to provide a seamless experience.

Features
Enable location using browser permissions.
Manually enter the delivery address.
Simple backend with APIs to save and retrieve addresses.
Responsive UI built with React.
Google Maps API integration.
Getting Started
Follow these instructions to set up the project on your local machine for development and testing.

Prerequisites
Ensure you have the following installed on your machine:

Node.js (version 16 or later) - Download here
npm or yarn (comes with Node.js)
A Google Maps API Key - Obtain API Key
Git - Download here

Installation
Clone the Repository
bash
Copy code
git clone https://github.com/Ankthetechguy/Locationaddress-Flow.git
cd location-flow
Frontend Setup
bash
Copy code
cd location-flow
npm install
Add .env in location-flow:

env
Copy code
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
Backend Setup
bash
Copy code
cd backend
npm install
Add .env in backend:

env
Copy code
PORT=5000
Run the Application
Start Backend
bash
Copy code
cd backend
node src/app.js
Start Frontend
bash
Copy code
cd location-flow
npm start
Usage
Enable Location: Use geolocation to detect your location.
Search Manually: Enter your delivery address manually.
API Endpoints
Add Address: POST /api/address
Body: { "house": "123", "area": "Main Street" }
Get Addresses: GET /api/addresses
