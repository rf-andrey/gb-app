import axios from "axios";

import { Order, OrderCore, OrderDisplay } from "@/types/api/orders";
import { Config } from "@/types/api/shared";

export const getOrders = async (config: Config) => {
  const response = await axios
    .get<OrderDisplay[]>("http://localhost:3333/api/orders/", config)
    .catch((err) => console.error(err));

  return response;
};

export const getOrderById = async (id: string, config: Config) => {
  try {
    const response = await axios.get<Order>(
      `http://localhost:3333/api/orders/${id}`,
      config
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const createOrder = async (
  formData:
    | {
        [k: string]: FormDataEntryValue;
      }
    | OrderCore,
  config: Config
) => {
  try {
    const response = await axios.post(
      `http://localhost:3333/api/orders/`,
      formData,
      config
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const updateOrder = async (
  id: string,
  formData: { [k: string]: FormDataEntryValue },
  config: Config
) => {
  try {
    await axios.put(`http://localhost:3333/api/orders/${id}`, formData, config);
  } catch (err) {
    console.error(err);
  }
};

export const deleteOrder = async (
  id: string,
  config: Config,
  callback: () => void
) => {
  try {
    await axios.delete(`http://localhost:3333/api/orders/${id}`, {
      data: { id },
      ...config,
    });
  } catch (err) {
    console.error(err);
  }

  callback();
};
