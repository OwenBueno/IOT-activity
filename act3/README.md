# Activity 3: IoT Data Decoder

A Node.js application that fetches and decodes hexadecimal IoT sensor data into readable environmental measurements.

## Features

- Fetches IoT sensor data from external API
- Decodes hexadecimal data into temperature, humidity, and pressure
- Displays decoded sensor readings in console
- Processes binary data from IoT devices

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the decoder:
```bash
node server.js
```

## Data Format

The application decodes hexadecimal data containing:
- **Temperature**: Float value in Celsius
- **Humidity**: Float value in percentage
- **Pressure**: Float value in hPa

## Technologies

- Node.js
- Axios for HTTP requests
- Buffer manipulation for binary data decoding
