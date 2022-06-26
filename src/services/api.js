import { SERVER_URL, VEHICLES, FIND, PLANETS, TOKEN } from "./constant.js";
import axios from "axios";

export function getTokenRequest() {
  return axios.post(`${SERVER_URL}${TOKEN}`, null, {
    headers: { Accept: "application/json" },
  });
}

export function getVehiclesRequest() {
  return axios.get(`${SERVER_URL}${VEHICLES}`);
}

export function getPlanetsRequest() {
  return axios.get(`${SERVER_URL}${PLANETS}`);
}

export function findRequest(body) {
  return axios.post(`${SERVER_URL}${FIND}`, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
