const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const users = [
  { id: 1, name: "Dileep", email: "dileep@gmail.com" },
  { id: 2, name: "Rahul", email: "rahul@gmail.com" },
  { id: 3, name: "Anita", email: "anita@gmail.com" }
];

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to NodeBackend API!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
