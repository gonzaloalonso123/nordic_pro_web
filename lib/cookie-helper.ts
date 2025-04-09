import Cookies from "js-cookie";

export const setCookie = (name: any, value: any, days: any) => {
  Cookies.set(name, value, { expires: days, path: "/" });
};

export const getCookie = (name: any) => {
  return Cookies.get(name);
};

export const deleteCookie = (name: any) => {
  Cookies.remove(name, { path: "/" });
};
