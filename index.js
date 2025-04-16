const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON y evitar errores de CORS
app.use(cors());
app.use(express.json());

app.post('/proxy', async (req, res) => {
  try {
    const response = await fetch('https://hook.us2.make.com/weibk4d8altifwvj3forbz696u5n7e4j', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error en el proxy:', error);
    res.status(500).json({ error: 'Error al redirigir la solicitud' });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);
});
