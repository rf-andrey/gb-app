import axios from "axios";

import { Category, CategoryDisplay } from "@/types/api/categories";
import { Config } from "@/types/api/shared";

export const getCategories = async (config: Config) => {
  const response = await axios
    .get<Category[]>("http://localhost:3333/api/categories/", config)
    .catch((err) => console.error(err));

  return response;
};

export const getCategoryById = async (id: string, config: Config) => {
  try {
    const response = await axios.get<CategoryDisplay>(
      `http://localhost:3333/api/categories/${id}`,
      config
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const createCategory = async (
  formData: {
    [k: string]: FormDataEntryValue;
  },
  config: Config
) => {
  try {
    const response = await axios.post(
      `http://localhost:3333/api/categories/`,
      formData,
      config
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const updateCategory = async (
  id: string,
  formData: { [k: string]: FormDataEntryValue },
  config: Config
) => {
  try {
    await axios.put(
      `http://localhost:3333/api/categories/${id}`,
      formData,
      config
    );
  } catch (err) {
    console.error(err);
  }
};

export const deleteCategory = async (
  id: string,
  config: Config,
  callback: () => void
) => {
  try {
    await axios.delete(`http://localhost:3333/api/categories/${id}`, {
      data: { id },
      ...config,
    });
  } catch (err) {
    console.error(err);
  }

  callback();
};
