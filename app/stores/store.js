import {createStore} from "rxsm";

const store = {
    isLoading: false,
    searchField: "",
    searchResult: {},
    price24H: "",
    blockChainHeight : 0
};

export const STORE = createStore(store);