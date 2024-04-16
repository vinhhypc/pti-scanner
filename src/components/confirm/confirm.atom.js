import { atom } from "recoil";

export const openModalView = atom({
  key: "openModalView",
  default: false,
});

export const openModalThankYou = atom({
  key: "openModalThankYou",
  default: false,
});

export const openModalCamera = atom({
  key: "openModalCamera",
  default: false,
});

export const slotCamera = atom({
  key: "slotCamera",
  default: "",
});

export const typePhoto = atom({
  key: "type",
  default: "",
});

export const openModalSkip = atom({
  key: "openModalSkip",
  default: false,
});

const submitBtn = atom({
  key: "submitBtn",
  default: "",
});
