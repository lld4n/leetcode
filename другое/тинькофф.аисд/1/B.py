n, k = map(int, input().split())
arr = list(map(int, input().split()))
questions = list(map(int, input().split()))


def closest_element(a, x):
    left = 0
    right = len(a) - 1
    while left <= right:
        mid = (left + right) // 2
        if a[mid] == x:
            return a[mid]
        elif a[mid] < x:
            left = mid + 1
        else:
            right = mid - 1

    if right < 0:
        return a[left]
    if left >= len(a):
        return a[right]

    if abs(a[left] - x) < abs(a[right] - x):
        return a[left]
    else:
        return a[right]


for q in questions:
    print(closest_element(arr, q))
