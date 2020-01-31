import {createStore} from "rxsm";

const store = {
    isLoading: false,
    searchField: "",
    searchResult: {},
    price24H: "",
    vol24H: "",
    hashRate: "",
    blockChainHeight : 0
};

export const STORE = createStore(store);