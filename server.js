const express = require('express');
const path = require('path');
const app = express();

// Setup view engine and static files directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// PayPal Environment Variables (directly from Render environment)
const PAYPAL_MERCHANT_ID = process.env.PAYPAL_MERCHANT_ID; // Set in Render's environment variables
const PRODUCT_1_ID = process.env.PAYPAL_PRODUCT_1_ID; // Set in Render's environment variables
const PRODUCT_2_ID = process.env.PAYPAL_PRODUCT_2_ID; // Set in Render's environment variables

// Route to render index page
app.get('/', (req, res) => {
  res.render('index', {
    PAYPAL_MERCHANT_ID: PAYPAL_MERCHANT_ID,
    PRODUCT_1_ID: PRODUCT_1_ID,
    PRODUCT_2_ID: PRODUCT_2_ID
  });
});

// Server configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
