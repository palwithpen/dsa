arr = [10,-1,3,98,20,79,6,41,5,9]
min = arr[0]
for (let p = 1; p<arr.length ; p++){
    if(arr[p]<min){
        if(arr[p]>0)
            min = arr[p]
    }
}
console.log(min);