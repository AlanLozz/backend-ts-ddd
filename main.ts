import express from "express";
import cors from "cors";
import "dotenv/config";

// set constants values
const PORT = process.env.PORT || 4990;

// set basic configuration
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require('./src/app'));

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`)
});