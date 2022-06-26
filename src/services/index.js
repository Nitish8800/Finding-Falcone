import {
  getTokenRequest,
  getVehiclesRequest,
  getPlanetsRequest,
  findRequest,
} from "./api.js";

export function getTokenData() {
  return getTokenRequest().then((res) => res.data);
}

export function getVehiclesData() {
  return getVehiclesRequest().then((res) => res.data);
}

export function getPlanetsData() {
  return getPlanetsRequest().then((res) => res.data);
}

export function getResultData(body) {
  return findRequest(body).then((res) => res.data);
}
