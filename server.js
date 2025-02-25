const express = require("express");
const path = require("path");
const app = express();

// Access the environment variable directly from Render
const PAYPAL_MERCHANT_ID = process.env.PAYPAL_MERCHANT_ID;

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Render the page with the PayPal Merchant ID
app.get("/", (req, res) => {
    res.render("index", { PAYPAL_MERCHANT_ID });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
