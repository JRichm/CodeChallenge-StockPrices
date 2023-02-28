let stockPrices = [63, 42, 68, 54, 68, 45, 114, 38, 68, 14, 98, 71, 78, 63];

let best = (stockPriceList) => {
    let maxReturn = 0;

    for (let i = 0; i < stockPriceList.length; i++) {
        for (let j = i; j < stockPriceList.length; j++) {
            if (stockPriceList[j] - stockPriceList[i] > maxReturn) {
                maxReturn = stockPriceList[j] - stockPriceList[i];
            }
        }
    }
    return maxReturn;
}


let egha = (prices) => {
    let maxDiff = 0;
    let lowSoFar;

    for (let i = 0; i < prices.length; i++) {
        if (lowSoFar === undefined || prices[i] < lowSoFar) {
            lowSoFar = prices[i];
        }

        let diff = prices[i] - lowSoFar;

        if (diff > maxDiff) {
        maxDiff = diff;
        }
    }

    return maxDiff;
}


console.log(best(stockPrices));
console.log(egha(stockPrices));
