const express = require("express");
const path = require("path");

const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files (CSS, JS)
app.use(express.static("public"));

// Define the home route to render `index.ejs`
app.get("/", (req, res) => {
    res.render("index");
});

// Use the Render-assigned port or default to 3000 (for local testing)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
