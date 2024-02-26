from collections import deque

n, k = map(int, input().split())
lst = list(map(int, input().split()))

arr = deque()
for i in range(n):

    while len(arr) > 0 and arr[0] < i - k + 1:
        arr.popleft()

    while len(arr) > 0 and lst[arr[-1]] > lst[i]:
        arr.pop()

    arr.append(i)

    if i >= k - 1:
        print(lst[arr[0]], end=" ")
