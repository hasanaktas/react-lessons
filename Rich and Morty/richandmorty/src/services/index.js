import { RichAndMartyApi } from "../utils";

export const getCharacters = () => RichAndMartyApi.get("/character");

export const getCharacter = (id) => RichAndMartyApi.get(`/character/${id}`);
