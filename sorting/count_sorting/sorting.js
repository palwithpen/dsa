function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);

    for (let num of arr) {
        count[num]++;
    }

    const sortedArr = [];
    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[i]; j++) {
            sortedArr.push(i);
        }
    }

    return sortedArr;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log("Sorted array:", sortedArr);
