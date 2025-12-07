function selection_sort(arr) {
    let n = arr.length
    for (let i = 0 ; i < n-1 ; i++){
        let min_index = 0
        for (let j=i+1; j<n ; j++){
            if (arr[j] < arr[min_index]){
                min_index = j
            }
        }

        if (min_index!==i){
            let temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp
        }
    }
    return arr
}

const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
const sortedArr = selection_sort(arr);
console.log("Sorted array:", sortedArr);