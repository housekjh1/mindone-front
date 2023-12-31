import { atom } from 'recoil';

export const isLoggedIn = atom({
    key: 'isLoggedIn',
    default: false,
});

export const userInfo = atom({
    key: 'userInfo',
    default: null,
});

export const sideBarState = atom({
    key: 'sideBarState',
    default: true,
});

export const sideBarToggle = atom({
    key: 'sideBarToggle',
    default: false,
})