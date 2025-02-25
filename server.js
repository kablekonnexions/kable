const express = require('express');
const path = require('path');
const app = express();

// Setup view engine and static files directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Environment Variables for PayPal Product IDs
const PRODUCT_1_ID = process.env.PAYPAL_PRODUCT_1_ID; // Set in Render or local .env file
const PRODUCT_2_ID = process.env.PAYPAL_PRODUCT_2_ID; // Set in Render or local .env file

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
