import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());

app.get("/getData", async (req, res) => {
    try {
        const response = await axios.get("http://localhost:8000/api/students");
        res.json(response.data); // Envía la respuesta de la API al cliente
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});


app.get("/getReportes", async (req, res) => {
    try {
        const response = await axios.get("http://localhost:8000/api/tickets");
        res.json(response.data); // Envía la respuesta de la API al cliente
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.listen(5000, () => console.log('backend iniciado'));
