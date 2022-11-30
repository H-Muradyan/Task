import axios from "axios";

export const getData = async (skip) => {
  return await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`);
};