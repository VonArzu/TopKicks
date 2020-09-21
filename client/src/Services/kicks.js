import api from "./apiConfig";

export const getKicks = async () => {
  try {
    const response = await api.get("/kicks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getKick = async (id) => {
  try {
    const response = await api.get(`/kicks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createKick = async (kick) => {
  try {
    const response = await api.post("/kicks", kick);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateKick = async (id, kick) => {
  try {
    const response = await api.put(`/kicks/${id}`, kick);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteKick = async (id) => {
  try {
    const response = await api.delete(`/kicks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
