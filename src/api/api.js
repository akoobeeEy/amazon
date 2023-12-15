import axios from "axios";

export const getProducts = async () => {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");
    return products
  } catch (err) {
    console.log(err);
  }
};
