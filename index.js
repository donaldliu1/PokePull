const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://donaldliu1313:pokiepull@cluster0.7nkkq0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const cardSchema = new mongoose.Schema({
  name: String,
  imageUrl: String
});

const gachaPullSchema = new mongoose.Schema({
  card: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
  timestamp: { type: Date, default: Date.now }
});

const Card = mongoose.model('Card', cardSchema);
const GachaPull = mongoose.model('GachaPull', gachaPullSchema);

async function getPokemonCardData() {
  const url = 'https://api.pokemontcg.io/v2/cards';
  const headers = {
    'X-Api-Key': 'd186b0e5-74f3-463b-885d-20b19b7c0a0c'
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

function simulateGachaPull(cardData, numPulls = 1) {
  const pulls = [];
  for (let i = 0; i < numPulls; i++) {
    const randomIndex = Math.floor(Math.random() * cardData.data.length);
    pulls.push(cardData.data[randomIndex]);
  }
  return pulls;
}

async function savePullResults(pulls) {
  for (const pull of pulls) {
    let card = await Card.findOne({ name: pull.name });
    if (!card) {
      card = new Card({ name: pull.name, imageUrl: pull.images.small });
      await card.save();
    }
    const gachaPull = new GachaPull({ card: card._id });
    await gachaPull.save();
  }
}

app.post('/simulate_pull', async (req, res) => {
  const cardData = await getPokemonCardData();
  const pulls = simulateGachaPull(cardData);
  await savePullResults(pulls);
  res.json({ pulls });
});

app.get('/pull_history', async (req, res) => {
  const history = await GachaPull.find().populate('card');
  const results = history.map(entry => ({
    cardName: entry.card.name,
    imageUrl: entry.card.imageUrl,
    timestamp: entry.timestamp
  }));
  res.json({ history: results });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
