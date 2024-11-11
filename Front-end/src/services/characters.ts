import { api } from "./api";

export const getAll = (filter = "") => api.get(`/characters${filter}`);