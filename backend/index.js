const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const toolsRouter = require('./database/routes/tools.route'); // Importar o arquivo de rotas

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.STRING_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api', toolsRouter); // Usar as rotas importadas

app.get('/api/emails', async (req, res) => {
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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
