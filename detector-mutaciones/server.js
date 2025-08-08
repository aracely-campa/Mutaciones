const express = require('express');
const mongoose = require('mongoose');
const hasMutation = require('./index');
require('dotenv').config();


const app = express();
app.use(express.json());

// 🔹 Conectar a MongoDB usando variable de entorno
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB conectado"))
.catch(err => console.error("❌ Error de conexión:", err));

// 🔹 Modelo ADN
const adnSchema = new mongoose.Schema({
    dna: { type: [String], unique: true },
    isMutation: Boolean,
    date: { type: Date, default: Date.now }
});
const ADN = mongoose.model('ADN', adnSchema);

// 🔹 POST /mutation
app.post('/mutation', async (req, res) => {
    try {
        const { dna } = req.body;
        if (!dna) return res.status(400).json({ error: "El campo 'dna' es obligatorio" });

        const mutation = hasMutation(dna);

        // Guardar en BD (si no existe)
        await ADN.updateOne(
            { dna },
            { dna, isMutation: mutation, date: new Date() },
            { upsert: true }
        );

        if (mutation) return res.status(200).json({ message: "Mutación detectada" });
        else return res.status(403).json({ message: "No se detectó mutación" });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// 🔹 GET /stats
app.get('/stats', async (req, res) => {
    const countMutations = await ADN.countDocuments({ isMutation: true });
    const countNoMutation = await ADN.countDocuments({ isMutation: false });
    const ratio = countNoMutation === 0 ? 0 : countMutations / countNoMutation;

    res.json({
        count_mutations: countMutations,
        count_no_mutation: countNoMutation,
        ratio: ratio
    });
});

// 🔹 GET /list
app.get('/list', async (req, res) => {
    const last10 = await ADN.find().sort({ date: -1 }).limit(10);
    res.json(last10);
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
