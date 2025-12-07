const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const EXTERNAL_ENDPOINT = 'https://callback-iot.up.railway.app/data';

app.get('/my-api/data', async (req, res) => {
    try {
        const response = await axios.get(EXTERNAL_ENDPOINT);
        const allData = response.data;

        let lastTwoRecords = [];
        if (Array.isArray(allData)) {
            lastTwoRecords = allData.slice(-2);
        } else {
            lastTwoRecords = [allData];
        }

        console.log('GET request successful. Returning last 2 records.');
        res.json(lastTwoRecords);

    } catch (error) {
        console.error('Error fetching external data:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from IoT source' });
    }
});

app.post('/my-api/visualize', async (req, res) => {
    const receivedData = req.body;

    console.log('Received data via POST:', receivedData);

    res.json({
        message: 'Data received and forwarded successfully',
        forwardedData: receivedData
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`API Server running at http://localhost:${PORT}`);
});