n, m, k = map(int, input().split())
mp = {}

for i in range(m):
    u, d, v = map(int, input().split())
    if u in mp:
        mp[u][d] = v
    else:
        mp[u] = {
            d: v
        }

l = list(map(int, input().split()))


def ff():
    s = 1
    for el in l:
        if s in mp and el in mp[s]:
            s = mp[s][el]
        else:
            return 0
    return s


print(ff())
