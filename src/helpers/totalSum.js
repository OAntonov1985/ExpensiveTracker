export function totalSumFunc(arr) {
    return arr.reduce((acc, item) => acc += item.sum, 0)

}