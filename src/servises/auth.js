
import { API_BASE_URL } from "./constant";

const AUTH_URL = `${API_BASE_URL}auth/`;

export const register = async (registerInfo) => {
  const response = await fetch(`${AUTH_URL}verify-email/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({key : Token}),
  });

  const jsonResponse = await response.json();

  if (!response.ok) {
    return { error: true, message: jsonResponse };
  }

  return { error: false, message: jsonResponse };
};

export const verifyEmail = async (token) => {
  const response = await fetch(`${AUTH_URL}login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  });

  const jsonResponse = await response.json();

  if (!response.ok) {
    return { error: true, message: jsonResponse };
  }
  
  localStorage.setItem("user",JSON.stringify(jsonResponse));

  return { error: false, message: jsonResponse };
};
