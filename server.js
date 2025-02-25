const express = require('express');
const path = require('path');
const app = express();

// Set up static files and view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Environment variables from Render (you do not need .env file if using Render's settings)
const PRODUCT_1_ID = process.env.PAYPAL_PRODUCT_1_ID;
const PRODUCT_2_ID = process.env.PAYPAL_PRODUCT_2_ID;

// Route to render index page
app.get('/', (req, res) => {
  res.render('index', {
    PRODUCT_1_ID: PRODUCT_1_ID,
    PRODUCT_2_ID: PRODUCT_2_ID
  });
});

// Server configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
