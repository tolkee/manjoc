import Cookies from "js-cookie";

export function setJwt(token: string) {
  Cookies.set("token", token);
}

export function deleteJwt() {
  Cookies.remove("token");
}
