const express = require('express');
const app = express();
const port = 3000;
const dayjs = require('dayjs');

app.use(express.json());

const sensorData = [];

app.post('/datosSensor', (req, res) => {
    const { temperatura, humedad } = req.body;

    if (temperatura === null || humedad === null) {
        return res.status(400).json({ error: "Temperatura y humedad adquirido" });
    }

    sensorData.push({
        temperatura,
        humedad,
        timestamp: dayjs().format('DD/MM/YYYY HH:mm:ss')
    });

    res.status(200).json({ message: "Datos enviados con claridad" });
});

app.get('/datosSensor', (req, res) => {
    res.status(200).json(sensorData);
});

app.listen(port, () => {
    console.log(`API corriendo en el puerto ${port}`);
});
