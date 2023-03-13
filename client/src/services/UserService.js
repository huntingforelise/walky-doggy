const BASE_URL = "http://localhost:3001";

const userService = {};

userService.register = (user) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

userService.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

userService.getUserInfo = (id) => {
  return fetch(`${BASE_URL}/user/${id}/info`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
    .then(async (res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
      console.log("get user info res:", json);
      return json;
    })
    .catch((err) => console.log(err));
};

userService.logout = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default userService;
