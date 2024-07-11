def selection_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        min_index = i

        # Find the index of the minimum element in the remaining unsorted array
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        # Swap the found minimum element with the first element of the unsorted array
        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr

# Example usage:
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)
sorted_arr = selection_sort(arr)
print("Sorted array:", sorted_arr)
