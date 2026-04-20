const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        name: "Madhur Sharma"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        skills: ["Unity", "Full Stack", "Machine Learning"]
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        name: "Madhur Sharma",
        role: "Developer",
        status: "Learning Azure Deployment"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});