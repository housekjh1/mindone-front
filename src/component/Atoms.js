import { atom } from 'recoil';

export const sideBarState = atom({
    key: 'sideBarState',
    default: true,
});

export const sideBarToggle = atom({
    key: 'sideBarToggle',
    default: false,
})