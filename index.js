const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Habilita CORS
app.use(express.json()); // Habilita lectura del body en JSON

// Ruta principal que recibe el imageUrl desde Make
app.post("/", (req, res) => {
  const imageUrl = req.body.imageUrl;

  if (!imageUrl) {
    console.error("❌ No se recibió 'imageUrl'");
    return res.status(400).json({ error: "Falta el campo 'imageUrl'" });
  }

  console.log("🖼️ Imagen recibida:", imageUrl);

  res.status(200).json({ message: "URL recibida correctamente", imageUrl });
});

// Puerto donde escucha Render (usa env.PORT)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
