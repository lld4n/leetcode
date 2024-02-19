n, k = map(int, input().split())
arr = list(map(int, input().split()))
questions = list(map(int, input().split()))


def binary_search(lst, target):
    low = 0
    high = len(lst) - 1

    while low <= high:
        mid = (low + high) // 2
        if lst[mid] == target:
            return "YES"
        elif lst[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return "NO"


for q in questions:
    print(binary_search(arr, q))
