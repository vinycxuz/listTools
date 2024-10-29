const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

dotenv.config();

const app = express(); // Mover a definição do app para o início
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por janela de tempo
});
app.use(limiter);

const toolsRouter = require('./database/routes/tools.route'); 

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.STRING_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api', toolsRouter); // Usar as rotas importadas

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

/*app.get('/api/emails', async (req, res) => {
  const apiKey = process.env.API_KEY_EMAIL;
  const namespace = process.env.NAMESPACE_EMAIL;
  const endpoint = `https://api.testmail.app/api/json?apikey=${apiKey}&namespace=${namespace}&pretty=true`;

  try {
    const response = await axios.get(endpoint);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching emails:', error);
    res.status(500).json({ message: 'Error fetching emails' });
  }
});
*/

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/* app.use(helmet()); 

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], 
      scriptSrc: ["'self'", "'unsafe-inline'"], 
      objectSrc: ["'none'"], 
      upgradeInsecureRequests: [], 
    },
  })
);
*/