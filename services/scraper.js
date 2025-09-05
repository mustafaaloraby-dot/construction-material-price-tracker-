const axios = require('axios');
const cheerio = require('cheerio');

async function scrapePrices() {
  try {
    const response = await axios.get('https://elkadysteel.com/en/blogs/Iron-price-today');
    const $ = cheerio.load(response.data);
    const priceText = $('.iron-price').first().text().trim();
    const price = parseFloat(priceText.replace(/[^\d]/g, ''));

    return [
      {
        id: 1,
        name: 'Ezz Steel Rebar',
        currentPrice: price,
        currency: 'EGP',
        unit: 'ton',
        supplier: 'Ezz Steel',
        lastUpdated: new Date().toISOString()
      }
    ];
  } catch (error) {
    console.error('Scraping error:', error);
    return [];
  }
}

async function getPriceHistory(id) {
  return [
    { date: '2025-08-01', price: 40000 },
    { date: '2025-08-10', price: 39900 },
    { date: '2025-09-01', price: 39858 }
  ];
}

async function comparePrices(materialType) {
  return {
    materialType,
    suppliers: [
      { name: 'Ezz Steel', price: 39858 },
      { name: 'Egyptian Steel', price: 38000 }
    ]
  };
}

module.exports = { scrapePrices, getPriceHistory, comparePrices };
