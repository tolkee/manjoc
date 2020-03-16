import { createContext, useContext } from "react";
import { observable, action } from "mobx";

class AuthStore {
  @observable isLogged: boolean;

  constructor() {
    this.isLogged = false;
  }

  @action
  connect() {
    this.isLogged = true;
  }

  @action
  disconnect() {
    this.isLogged = false;
  }
}

const authStore = new AuthStore();
const authContext = createContext(authStore);

export default function useAuthStore() {
  return useContext(authContext);
}
