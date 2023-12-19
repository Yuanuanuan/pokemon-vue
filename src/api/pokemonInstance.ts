import axios, { AxiosInstance } from "axios";

const baseURL: string = "https://pokeapi.co/api/v2/pokemon";

export const pokemonInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
});
