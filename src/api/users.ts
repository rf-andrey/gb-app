import { Config } from "@/types/api/shared";
import { User, UserCore } from "@/types/api/users";
import axios from "axios";

export const getUsers = async (config: Config) => {
  const response = await axios
    .get<User[]>("http://localhost:3333/api/users/", config)
    .catch((err) => console.error(err));

  return response;
};

export const getUserById = async (id: string, config: Config) => {
  try {
    const response = await axios.get<UserCore>(
      `http://localhost:3333/api/users/${id}`,
      config
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (
  id: string,
  formData: { [k: string]: FormDataEntryValue },
  config: Config
) => {
  try {
    await axios.put(`http://localhost:3333/api/users/${id}`, formData, config);
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async (
  id: string,
  config: Config,
  callback: () => void
) => {
  try {
    await axios.delete(`http://localhost:3333/api/users/${id}`, {
      data: { id },
      ...config,
    });
  } catch (err) {
    console.error(err);
  }

  callback();
};
