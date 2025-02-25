const express = require("express");
const path = require("path");
const app = express();

// Access product IDs from Render environment variables
const PRODUCT_1_ID = process.env.PRODUCT_1_ID;
const PRODUCT_2_ID = process.env.PRODUCT_2_ID;

// Access the PayPal Merchant ID (if it's set in environment)
const PAYPAL_MERCHANT_ID = process.env.PAYPAL_MERCHANT_ID;

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Render the page with the PayPal Merchant ID and product IDs
app.get("/", (req, res) => {
    res.render("index", { 
        PAYPAL_MERCHANT_ID, 
        PRODUCT_1_ID, 
        PRODUCT_2_ID 
    });
});

// Routes for other pages
app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/shipping", (req, res) => {
    res.render("shipping");
});

app.get("/terms", (req, res) => {
    res.render("terms");
});

app.get("/refunds", (req, res) => {
    res.render("refunds");
});

app.get("/privacy", (req, res) => {
    res.render("privacy");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
