const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/chat", (req, res) => {
    const msg = req.body.message;

    // simple AI logic placeholder
    let reply = "🤖 SUHAILAI: " + msg;

    res.json({ reply });
});

app.listen(3000, () => {
    console.log("SUHAILAI running on http://localhost:3000");
});
