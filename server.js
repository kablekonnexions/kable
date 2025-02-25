const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS)
app.use(express.static("public"));

// Render index.ejs (Frontend)
app.get("/", (req, res) => {
    res.render("index");
});

// Send merchant ID dynamically from Render environment variable
app.get("/config", (req, res) => {
    res.json({ merchantId: process.env.PAYPAL_MERCHANT_ID || "" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
