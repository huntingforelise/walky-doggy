const BASE_URL = "http://localhost:3001";

export const getWalks = () =>
  fetch(`${BASE_URL}/walks`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => err);
