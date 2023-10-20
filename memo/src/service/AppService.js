import { API_BASE_URL } from "../app-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const USER_ID = "USER_ID";

export async function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    options.body = JSON.stringify(request);
  }
  return await fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      console.log("Ooops!");
      if (error.status === 403) {
        window.location.href = "/notebooks/all";
      }
      return Promise.reject(error);
    });
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO).then((response) => {
    if (response.token) {
      localStorage.setItem(ACCESS_TOKEN, response.token);
      localStorage.setItem(USER_ID, response.id);
    }
    window.location.href = "/notebooks/all";
  });
}

export function signup(userDTO) {
  return call("/auth/signup", "POST", userDTO)
    .then((response) => {
      if (response.id) {
        window.location.href = "/";
      }
    })
    .catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      console.log("Ooops!");
      if (error.status === 403) {
        window.location.href = "/signup";
      }
      return Promise.reject(error);
    });
}

export function signout() {
  localStorage.setItem(ACCESS_TOKEN, null);
  window.location.href = "/";
}

export function getUserInfo() {
  const userId = localStorage.getItem(USER_ID);
  if (!userId) {
    return Promise.reject("User ID not found");
  }
  return call(`/auth/${userId}`, "GET")
    .then((response) => {
      if (response.id) {
        return response;
      }
    })
    .catch((error) => {
      console.error("Failed to get user info:", error);
    });
}

export function updateUserInfo(userId, updatedUser) {
  return call(`/auth/${userId}`, "PUT", updatedUser)
    .then((response) => {
      console.log("User info updated successfully");
    })
    .catch((error) => {
      console.error("Failed to update user info:", error);
    });
}

export function deleteUser(userId) {
  return call(`/auth/delete/${userId}`, "DELETE")
    .then(() => {
      console.log("User deleted successfully");
    })
    .catch((error) => {
      console.error("Failed to delete user:", error);
    });
}
