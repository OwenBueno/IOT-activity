# IoT Laboratory 6

This laboratory contains two IoT data processing activities that work with external sensor data APIs.

## Activities

### Activity 1: IoT Data Visualization
A web application that fetches and displays IoT sensor data.

**Location**: `act1/` directory

**Features**:
- RESTful API server with Express.js
- Web interface for data visualization
- Fetches data from external IoT endpoint
- Displays latest sensor records

**Run**:
```bash
cd act1
npm install
node server.js
```
Then open `http://localhost:3000`

### Activity 2: IoT Data Decoder
A data processing application that decodes hexadecimal sensor data.

**Location**: `act3/` directory

**Features**:
- Fetches raw IoT sensor data
- Decodes hexadecimal data into readable values
- Extracts temperature, humidity, and pressure
- Console-based output

**Run**:
```bash
cd act3
npm install
node server.js
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Axios** - HTTP client for API requests
- **HTML/CSS/JavaScript** - Frontend interface

## Data Source

Both activities connect to the same external IoT API endpoint:
`https://callback-iot.up.railway.app/data`

## Prerequisites

- Node.js installed
- npm package manager
- Internet connection for API access