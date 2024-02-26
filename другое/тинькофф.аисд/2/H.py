n = int(input())
lst = list(map(int, input().split()))

prefix = [0]
lbor = [0] * n
rbor = [0] * n

lstack = [(-1, -1)]
rstack = [(-1, n)]

for i in range(len(lst)):
    prefix.append(prefix[-1] + lst[i])

    while lstack[-1][0] >= lst[i]:
        lstack.pop()
    lbor[i] = lstack[-1][1] + 1
    lstack.append((lst[i], i))

for i in range(len(lst) - 1, -1, -1):
    while rstack[-1][0] >= lst[i]:
        rstack.pop()
    rbor[i] = rstack[-1][1] - 1
    rstack.append((lst[i], i))

ans = 0
for i in range(len(lst)):
    sm = prefix[rbor[i] + 1] - prefix[lbor[i]]
    ans = max(ans, sm * lst[i])

print(ans)
