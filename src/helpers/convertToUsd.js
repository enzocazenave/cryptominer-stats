export const convertToUsd = (value, price) => {
    return parseFloat(value * price).toFixed(2)
}
