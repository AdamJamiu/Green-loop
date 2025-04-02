"use client";

import axios from "axios";
import { toast } from "react-toastify";

export const httpClient = axios.create({
  // baseURL: process.env.NEXT_BASE_URL,
  baseURL: "https://greenloop-latest.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    tenant: "root",
  },
});

export const adminCaller = axios.create({
  // baseURL: process.env.NEXT_BASE_URL,
  baseURL: "https://greenloop-latest.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    tenant: "root",
  },
});

adminCaller.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (!token) {
      // Logout();
    }

    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

adminCaller.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   toast("Your session has expired or is no longer valid.", {
    //     type: "error",
    //     autoClose: 2000,
    //     toastId: "adminCaller",
    //     hideProgressBar: true,
    //     progress: undefined,
    //   });
    //   // Logout();
    // }

    if (error.response && error.response.status === 403) {
      toast("You do not have permission to perfom this operation.", {
        type: "error",
        autoClose: 3000,
        toastId: "adminCaller",
        hideProgressBar: true,
        progress: undefined,
      });
      // Logout();
    }
    return Promise.reject(error);
  }
);

adminCaller.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const { status } = error.response;
    const currentLocation = window.location.pathname;

    if (status === 401) {
      const user = JSON.parse(
        sessionStorage?.getItem("green-loop-user") as string
      );
      const token = sessionStorage.getItem("token");
      const refreshToken = user?.refreshToken;

      if (!token || !refreshToken) {
        toast("Your session has expired. Please login again.", {
          toastId: "clientError",
          type: "error",
          autoClose: 3000,
          theme: "colored",
          hideProgressBar: true,
        });
        sessionStorage.removeItem("green-loop-user");
        window.location.href = `/login`;
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(
          "https://greenloop-latest.onrender.com/api/tokens/refresh",
          {
            refreshToken,
            token,
          }
        );
        console.log(res, "refresh token response");

        // sessionStorage.setItem("super_app_access_token", res.data?.token);
        // sessionStorage.setItem("token", res.data?.refreshToken);

        // Retry the original request with the new access token
        // error.config.headers.Authorization = `Bearer ${res.data?.token}`;
        return axios(error.config);
      } catch (refreshError) {
        // Handle refresh token error
        toast.error("Your session has expired. Please login again.", {
          toastId: "clientError",
          autoClose: 3000,
        });
        console.error("Error refreshing token:", refreshError);
        sessionStorage.clear();
        setTimeout(() => {
          window.location.href = `/login`;
        }, 2000);
        return Promise.reject(error);
      }
    }

    if (status === 500) {
      toast("Something went wrong", {
        type: "error",
        toastId: "clientError",
      });
    }

    return Promise.reject(error);
  }
);
