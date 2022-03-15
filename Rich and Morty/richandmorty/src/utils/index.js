import axios from "axios";

export const RichAndMartyApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const stringToUrlFriendly = (str) =>
  str.split(" ").join("-").toLowerCase();
