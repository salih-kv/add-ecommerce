import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import items from "./routes/item.route.js";

dotenv.config();
const PORT = process.env.PORT || 6000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// connect to the mongodb database
connectDB();

app.use("api/items", items);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
