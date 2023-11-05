import { Items } from "../models/item.model";

export const getItem = async (req, res, next) => {
  const items = await Items.find();
  res.json(items);
};
