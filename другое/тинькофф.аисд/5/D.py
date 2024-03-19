import sys

S = sys.stdin.readline().strip()

T = S + S
m = S
for i in range(len(S)):
    cur = T[i:i + len(S)]
    if cur < m:
        m = cur

print(m)
