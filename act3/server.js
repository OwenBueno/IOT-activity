const axios = require('axios');

const URL = "https://callback-iot.up.railway.app/data";

async function decodeIoTData() {
    console.log(`Fetching data from ${URL}...\n`);

    try {
        const response = await axios.get(URL);
        let data = response.data;

        if (!Array.isArray(data)) {
            data = [data];
        }
        console.log("Decoding Results:");

        data.forEach(record => {
            if (record.hexData) {
                try {
                    const buffer = Buffer.from(record.hexData, 'hex');

                    const temperature = buffer.readFloatLE(0);
                    
                    const humidity = buffer.readFloatLE(4);
                    
                    const pressure = buffer.readFloatLE(8);

                    console.log(`Device: ${record.device || 'N/A'}`);
                    console.log(`Hex:    ${record.hexData.substring(0, 24)}...`);
                    console.log(`Values: Temp: ${temperature.toFixed(2)} °C, Hum: ${humidity.toFixed(2)} %, Pres: ${pressure.toFixed(2)} hPa`);
                    console.log("---------------------------------------------------------------");

                } catch (err) {
                    console.error("Error parsing binary data for record:", err.message);
                }
            }
        });

    } catch (error) {
        console.error("Network Error:", error.message);
    }
}

decodeIoTData();