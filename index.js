const express = require("express");
const cors = require("cors");
const app = express(); // 👈 ESTA LÍNEA ES FUNDAMENTAL

app.use(cors());
app.use(express.json());


app.post("/", (req, res) => {
  const imageUrl = req.body.imageUrl;

  if (!imageUrl) {
    console.error("❌ No se recibió 'imageUrl'");
    return res.status(400).json({ error: "Falta el campo 'imageUrl'" });
  }

  console.log("🖼️ Imagen recibida:", imageUrl);

  // Redirigir a Webflow con la URL como parámetro
  const encodedUrl = encodeURIComponent(imageUrl);
  res.redirect(`https://agapets-dapper-site.webflow.io/espera?image=${encodedUrl}`);
});
