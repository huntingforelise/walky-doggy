const BASE_URL = "http://localhost:3001";

export const getWalk = (id: string): Promise<any> =>
  fetch(`${BASE_URL}/walk/${id}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => err);

export const getWalks = (): Promise<any> =>
  fetch(`${BASE_URL}/walks`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => err);

export const postWalk = (body: object): Promise<any> => {
  return fetch(`${BASE_URL}/walk`, {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const joinWalk = (id: string, walkerID: string): Promise<any> => {
  return fetch(`${BASE_URL}/joinwalk/${id}`, {
    method: "PUT",
    body: JSON.stringify({ walkerID }),
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const updateWalkRecord = (record): Promise<any> => {
  const ID = record.eventId;
  return fetch(`${BASE_URL}/walk/${ID}`, {
    method: "PUT",
    body: JSON.stringify(record),
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const updateWalkImage = async (
  link: string,
  id: string
): Promise<any> => {
  const ID = id;
  const URL = link;
  return fetch(`${BASE_URL}/walk/${ID}/image`, {
    method: "PUT",
    body: JSON.stringify({ URL }),
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    mode: "cors",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const deleteWalk = (id: string): Promise<any> => {
  return fetch(`${BASE_URL}/walk/${id}`, {
    method: "DELETE",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
