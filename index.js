const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// React Native -> Node.js -> Flask AI Server
app.post("/diagnose", async (req, res) => {
  try {
    const response = await axios.post("http://172.16.9.136:5001/predict", req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error from Python server:", error.message);
    res.status(500).json({ error: "Could not connect to AI server" });
  }
});

app.listen(PORT, () => {
  console.log(`Node.js server running on http://localhost:${PORT}`);
});
