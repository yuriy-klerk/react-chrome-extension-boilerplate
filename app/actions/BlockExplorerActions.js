import React from "react";

export const SET_SEARCH_FIELD = "SET_SEARCH_FIELD";
export const SET_LOADING = "SET_LOADING";

export const setSearchField = (value) => ({
    name: SET_SEARCH_FIELD,
    func: () => {
        return {
            searchField: value
        }
    }
});

export const seLoading = (isLoading) => ({
    name: SET_LOADING,
    func: () => {
        return {
            isLoading: isLoading
        }
    }
})