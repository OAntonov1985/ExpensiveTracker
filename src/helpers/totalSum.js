export function totalSumFunc(arr) {
    let sum = 0;
    arr.forEach(item => sum += item.sum);
    return sum;
}