import { StorageData } from "../global/type";

export const localStorage = () => {
    let storage = window.localStorage;

    const store = () => {
        get: () => {
            return storage.getItem('user');
        }
        set: (user: StorageData) => {
            storage.setItem('user', JSON.stringify(user))
        }
    }

    return store;
}