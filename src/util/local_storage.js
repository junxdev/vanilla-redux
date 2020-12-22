const localStorageHas = (key) => {
    return window.localStorage.getItem(key) === null 
        || window.localStorage.getItem(key) === "";
}

const getFromLocalStorage = (key) => {
    if (localStorageHas(key)) {
        window.localStorage.setItem(key, JSON.stringify([]));
    }
    return JSON.parse(window.localStorage.getItem(key));
};

const saveToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    return JSON.parse(window.localStorage.getItem(key));
};

export { localStorageHas, getFromLocalStorage, saveToLocalStorage }