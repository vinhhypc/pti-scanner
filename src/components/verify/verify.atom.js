import { atom } from 'recoil';

export const listCheckCondition = atom({
  key: 'listCheckConditionAtom',
  default: true
});

export const openModalConfirm = atom({
  key: 'openModalConfirmAtom',
  default: false
});


export const openModalViewSuccess = atom({
  key: 'openModalViewSuccessAtom',
  default: false
});

