function bubble_sort(arr){
    n = arr.length
    for(let i=0;i<n ;i++){
        let swapped = false
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        if (!swapped){
            break
        }
    }
    return arr
}
console.log(bubble_sort([19,8,17,5,11,12,0]))