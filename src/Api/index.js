import axios from "axios";

export const instance = axios.create({
  baseURL: "https://flowerist-db-production.up.railway.app/api",
});

export const instance2 = axios.create({
  baseURL: "https://flowerist-db-production.up.railway.app/api",
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
    "Content-Type": "application/json",
  },
});
