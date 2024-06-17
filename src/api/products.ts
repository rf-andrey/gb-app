import axios from "axios";

import { Product, ProductDisplay } from "@/types/api/products";
import { Config } from "@/types/api/shared";

export const getProducts = async (config: Config) => {
  const response = await axios
    .get<ProductDisplay[]>("http://localhost:3333/api/products/", config)
    .catch((err) => console.error(err));

  return response;
};

export const getProductById = async (id: string, config: Config) => {
  try {
    const response = await axios.get<Product>(
      `http://localhost:3333/api/products/${id}`,
      config
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const createProduct = async (
  formData: {
    [k: string]: FormDataEntryValue;
  },
  config: Config
) => {
  try {
    const response = await axios.post(
      `http://localhost:3333/api/products/`,
      formData,
      config
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const updateProduct = async (
  id: string,
  formData: { [k: string]: FormDataEntryValue } | Product,
  config: Config
) => {
  try {
    await axios.put(
      `http://localhost:3333/api/products/${id}`,
      formData,
      config
    );
  } catch (err) {
    console.error(err);
  }
};

export const deleteProduct = async (id: string, config: Config) => {
  try {
    await axios.delete(`http://localhost:3333/api/products/${id}`, {
      data: { id },
      ...config,
    });
  } catch (err) {
    console.error(err);
  }
};
