export const convertToUsd = (value, price) => {
    return parseInt(value * price).toFixed(2)
}
