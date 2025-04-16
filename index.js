const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/generate-image', async (req, res) => {
  try {
    const response = await fetch('const response = await fetch('https://hook.us2.make.com/weibk4d8altifwvj3forbz696u5n7e4j');

');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error al conectar con Make:', error);
    res.status(500).json({ error: 'Error interno del proxy' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy corriendo en http://localhost:${PORT}`);
});
