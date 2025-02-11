export default function deleteItemFromData(arr, index) {
    arr.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(arr));
    return arr;
}
