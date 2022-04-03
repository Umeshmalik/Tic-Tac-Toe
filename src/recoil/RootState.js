import { atom } from "recoil";

export const isLightTheme = atom({
    key: "isLightTheme",
    default: localStorage.getItem("isLight") === "true" || false,
});