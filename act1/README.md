# Activity 1: IoT Data Visualization

A web application that fetches and visualizes IoT sensor data from an external API.

## Features

- Fetches latest IoT sensor data from external endpoint
- Displays last 2 sensor records
- Web interface with real-time data visualization
- RESTful API endpoints for data retrieval

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

3. Open your browser to `http://localhost:3000`

## API Endpoints

- `GET /my-api/data` - Returns last 2 IoT sensor records
- `POST /my-api/visualize` - Receives and forwards sensor data

## Technologies

- Node.js
- Express.js
- Axios for HTTP requests
- HTML/CSS/JavaScript frontend
