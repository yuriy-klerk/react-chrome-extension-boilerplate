import React from "react";

export const formatPriceBTC = (price) => {
    return (price / 100000000);
};

export const formatFee = (fee) => {
    return (fee / 100000000).toFixed(8);
}

export const formatVolBTC = (price) => {
    price = price.toString();
    price = price.slice(0, (price.indexOf(".")) + 3);
    return Number(price);
}

export const formatHashRate = (hashRate) => {
    return (hashRate/1000000000).toFixed(2);
}