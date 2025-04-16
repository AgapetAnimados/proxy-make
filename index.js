const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta principal que recibe imageUrl y redirige a Webflow
app.post("/", (req, res) => {
  const imageUrl = req.body.imageUrl;

  if (!imageUrl) {
    console.error("❌ No se recibió 'imageUrl'");
    return res.status(400).json({ error: "Falta el campo 'imageUrl'" });
  }

  console.log("🖼️ Imagen recibida:", imageUrl);

  // Redirección a Webflow con la imagen como parámetro
  const redirectUrl = `https://agapets-dapper-site.webflow.io/espera?imagen=${encodeURIComponent(imageUrl)}`;
  res.redirect(302, redirectUrl);
});

// Escuchar en el puerto asignado por Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
