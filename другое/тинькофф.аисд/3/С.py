import math
import sys

n = int(sys.stdin.readline())
lgn = math.ceil(math.log2(n))
parent = [-1]
depth = [0]

lst = list(map(int, sys.stdin.readline().split()))

for i in range(len(lst)):
    parent.append(lst[i])
    depth.append(depth[lst[i]] + 1)

m = int(sys.stdin.readline())
query = []
for _ in range(m):
    query.append(list(map(int, sys.stdin.readline().split())))

jmp = [[0] * (lgn + 1)]
for i in range(1, n):
    jmp.append([0] * (lgn + 1))
    jmp[i][0] = parent[i]
    for k in range(1, lgn + 1):
        jmp[i][k] = jmp[jmp[i][k - 1]][k - 1]

for u, v in query:
    if depth[u] < depth[v]:
        u, v = v, u

    if depth[u] != depth[v]:
        for k in range(lgn, -1, -1):
            ud = jmp[u][k]
            if depth[ud] >= depth[v]:
                u = ud
    if u == v:
        print(u)
    else:
        for k in range(lgn, -1, -1):
            ud = jmp[u][k]
            vd = jmp[v][k]
            if ud != vd:
                u = ud
                v = vd
        print(parent[u])
