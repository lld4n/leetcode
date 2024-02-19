n, k = map(int, input().split())
arr = list(map(int, input().split()))
questions = list(map(int, input().split()))


def binary_search(lst, target):
    low = 0
    high = len(lst) - 1

    while low <= high:
        mid = (low + high) // 2
        if lst[mid] == target:
            return target
        elif lst[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    if abs(lst[low] - target) < abs(lst[high] - target):
        return lst[low]
    elif abs(lst[low] - target) > abs(lst[high] - target):
        return lst[high]
    else:
        return min(lst[low], lst[high])


for q in questions:
    print(binary_search(arr, q))
