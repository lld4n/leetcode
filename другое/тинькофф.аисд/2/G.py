from collections import deque

n = int(input())

left = deque()
right = deque()

for _ in range(n):
    item = input().split()
    if item[0] == "+":
        right.append(int(item[1]))
        if len(left) < len(right):
            left.append(right.popleft())
    elif item[0] == "*":
        if len(left) == len(right):
            left.append(int(item[1]))
        else:
            right.appendleft(int(item[1]))
    else:
        print(left.popleft())
        if len(left) < len(right) and len(right) > 0:
            left.append(right.popleft())
