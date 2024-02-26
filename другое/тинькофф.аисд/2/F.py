from collections import deque

n = int(input())
stack = deque()

for _ in range(n):
    item = input().split()
    if item[0] == '1':
        stack.append(int(item[1]))
    elif item[0] == '2':
        stack.popleft()
    elif item[0] == '3':
        stack.pop()
    elif item[0] == '4':
        print(stack.index(int(item[1])))
    else:
        print(stack[0])
