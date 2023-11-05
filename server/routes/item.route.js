import express from "express";
const router = express();

import { getItem } from "../controllers/items.controller";

router.post("/", getItem);

export default router;
