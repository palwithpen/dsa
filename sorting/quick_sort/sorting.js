function quick_sort(arr) {
    if (arr.length <=1)
        return arr

    let pivot  = arr[Math.floor(arr.length/2)]
    let left = []
    let mid = []
    let right = []

    for(let i = 0; i < arr.length ; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        } else if(arr[i]>pivot){
            right.push(arr[i])
        } else {
            mid.push(arr[i])
        }
    }
    return quick_sort(left).concat(mid, quick_sort(right))
}

const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = quick_sort(arr);
console.log("Sorted array:", sortedArr);