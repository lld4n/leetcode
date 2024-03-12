import sys

n = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline())

prefixSum = []
prefixXor = []
prefixSum.append(arr[0])
prefixXor.append(arr[0])

for i in range(1, n):
    prefixSum.append(prefixSum[i - 1] + arr[i])
    prefixXor.append(prefixXor[i - 1] ^ arr[i])


def giveSum(l, r):
    if l == 1:
        return prefixSum[r - 1]
    else:
        return prefixSum[r - 1] - prefixSum[l - 2]


def giveXor(l, r):
    if l == 1:
        return prefixXor[r - 1]
    else:
        return prefixXor[r - 1] - prefixXor[l - 2]


ans = []

for i in range(m):
    q, l, r = map(int, sys.stdin.readline().split())
    if q == 1:
        ans.append(giveSum(l, r))
    else:
        ans.append(giveXor(l, r))

sys.stdout.write("\n".join(map(str, ans)))
