const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cron = require('node-cron');

dotenv.config();

const pricesRoutes = require('./routes/prices');
const suppliersRoutes = require('./routes/suppliers');
const notificationsRoutes = require('./routes/notifications');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.use('/api/prices', pricesRoutes);
app.use('/api/suppliers', suppliersRoutes);
app.use('/api/notifications', notificationsRoutes);

cron.schedule('0 */2 * * *', () => {
  console.log('Scheduled scrape running...');
  // Call scraping function here
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
