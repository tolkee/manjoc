import { createContext, useContext } from "react";
import { observable, action, computed } from "mobx";
import { DarkTheme, LightTheme, ThemeApp } from "../theme";

class SettingsStore {
  @observable themeApp: ThemeApp;

  constructor() {
    this.themeApp = LightTheme;
  }

  @computed
  get themeName() {
    return this.themeApp.name;
  }

  @computed
  get theme() {
    return this.themeApp.theme;
  }

  @action
  handleTheme(name: string) {
    this.themeApp = name === "DARK" ? DarkTheme : LightTheme;
  }
}

const settingsStore = new SettingsStore();
const settingsContext = createContext(settingsStore);

export default function useSettingsStore() {
  return useContext(settingsContext);
}