export const convertData = (stat,int64) => {
    var result = 0;

    if (stat === 'balance' || stat === 'paid' || stat === 'reward24') {
        result = (int64 / 1000000000).toFixed(6);
    } else if (stat === 'currentHashrate' || stat === 'hashrate') {
        result = (int64 / 1000000).toFixed(2);
    } else if (stat === 'lastShare') {
        result = new Date(int64 * 1000).toLocaleString();
    }

    return result;
}