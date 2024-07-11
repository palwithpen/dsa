def insertion_sort(arr):
    # Traverse from the second element to the end of the array
    for i in range(1,len(arr)):
        key = arr[i] # The current element to be inserted in the sorted portion
        j = i-1
        
        # Move elements of arr[0..i-1], that are greater than key, to one position ahead
        # of their current position

        while j>=0 and arr[j]>key:
            arr[j+1]= arr[j]
            j -= 1
        
        # Insert the key element at the correct position
        arr[j+1]=key
    return arr

print(insertion_sort([19,8,17,5,11,12,0])) 