const BASE_URL: string = "http://localhost:3001";

export const register = async (user: { username: string; password: string }) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export const login = async (user: { username: string; password: string }) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getUserInfo = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/user/${id}/info`, {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await res.json();
    console.log("get user info res:", json);
    return await json;
  } catch (err) {
    return console.log(err);
  }
};

export const logout = async () => {
  try {
    const res = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};
