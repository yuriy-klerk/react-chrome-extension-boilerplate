import React from "react";

export const formatPriceBTC = (price) => {
    return (price / 100000000);
};

export const formatFee = (fee) => {
    return (fee / 100000000).toFixed(8);
}