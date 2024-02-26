import sys
from collections import deque

n = int(sys.stdin.readline())

stack = deque()
m = [0] * 100001
rem = 0

ans = []

for _ in range(n):
    line = sys.stdin.readline().split()
    if line[0] == '1':
        item = int(line[1])
        m[item] = len(stack) + rem
        stack.append(item)
    elif line[0] == '2':
        stack.popleft()
        rem += 1
    elif line[0] == '3':
        stack.pop()
    elif line[0] == '4':
        item = int(line[1])
        ans.append(m[item] - rem)
    else:
        ans.append(stack[0])

for i in range(len(ans)):
    sys.stdout.write(str(ans[i]) + '\n')
