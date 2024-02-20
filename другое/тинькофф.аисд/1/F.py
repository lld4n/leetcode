n = int(input())
arr = list(map(int, input().split()))


def merge_sort(arr):
    if len(arr) <= 1:
        return arr, 0

    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    left, inversions_left = merge_sort(left)
    right, inversions_right = merge_sort(right)

    sorted_arr, inversions = merge(left, right)

    inversions += inversions_left + inversions_right

    return sorted_arr, inversions


def merge(left, right):
    result = []
    i = j = 0
    inversions = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
            inversions += len(left) - i

    result.extend(left[i:])
    result.extend(right[j:])

    return result, inversions


sorted_arr, inversions = merge_sort(arr)

print(inversions)
print(' '.join(map(str, sorted_arr)))
