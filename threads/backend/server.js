const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.port || 3000;
app.use(express.json());

// Routes

app.listen(3000, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
