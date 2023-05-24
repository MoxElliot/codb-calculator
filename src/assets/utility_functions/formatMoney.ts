const formatMoney = (num: number) => {
    return parseFloat(num.toFixed(2))
}

// parseFloat(num).tofixed(2)

//input as string, converts it to num, validate, sends to state as number
//call as number, then convert to string
//Vue3 input mask $ which supports typescript

export default formatMoney