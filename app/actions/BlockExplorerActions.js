import React from "react";

export const SET_SEARCH_FIELD = "SET_SEARCH_FIELD";

export const setSearchField = (value) => ({
    name: SET_SEARCH_FIELD,
    func: () => {
        return {
            searchField: value
        }
    }
});