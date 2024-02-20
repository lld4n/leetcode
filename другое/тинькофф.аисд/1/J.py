import math

ln = int(input())

arr = []

for _ in range(ln):
    line = input().strip()
    arr.append(list(map(int, line.split())))


def L(n, m, k):
    return (((n - 1) * m * n + (k + 1) * n) * k) / 2


def R(n, m, k):
    return (((n - 1) * m * n + (k + 1 + m) * n) * (m - k)) / 2


def U(n, m, k):
    return ((k * m ** 2 + m) * k) / 2


def D(n, m, k):
    return (((k + n) * m ** 2 + m) * (n - k)) / 2


def horizontal(n, m):
    def binary():
        low = 1
        high = n
        while low <= high:
            mid = (low + high) // 2
            if U(n, m, mid) <= D(n, m, mid):
                low = mid + 1
            else:
                high = mid - 1
        return low - 1

    roots = findRoots(2 * m ** 2, 2 * m, -(n ** 2 * m ** 2) - n * m)
    if len(roots) == 1 and roots[0] < n:
        k = int(roots[0])
        div1 = abs(D(n, m, k) - U(n, m, k))
        div2 = abs(U(n, m, k + 1) - D(n, m, k + 1))
        if div1 < div2:
            return [k, div1]
        else:
            return [k + 1, div2]
    else:
        k = binary()
        div1 = abs(D(n, m, k) - U(n, m, k))
        div2 = abs(U(n, m, k + 1) - D(n, m, k + 1))
        if div1 < div2:
            return [k, div1]
        else:
            return [k + 1, div2]


def vertical(n, m):
    def binary():
        low = 1
        high = m
        while low <= high:
            mid = (low + high) // 2
            if L(n, m, mid) <= R(n, m, mid):
                low = mid + 1
            else:
                high = mid - 1
        return low - 1

    roots = findRoots(-2 * n, 2 * m * n - 2 * m * n ** 2 - 2 * n, m ** 2 * n ** 2 + m * n)
    if len(roots) == 1 and roots[0] < m:
        k = int(roots[0])
        div1 = abs(L(n, m, k) - R(n, m, k))
        div2 = abs(L(n, m, k + 1) - R(n, m, k + 1))
        if div1 < div2:
            return [k, div1]
        else:
            return [k + 1, div2]
    else:
        k = binary()
        div1 = abs(L(n, m, k) - R(n, m, k))
        div2 = abs(L(n, m, k + 1) - R(n, m, k + 1))
        if div1 < div2:
            return [k, div1]
        else:
            return [k + 1, div2]


def findRoots(A, B, C):
    discriminant = B ** 2 - 4 * A * C
    if discriminant > 0:
        root1 = (-B + math.sqrt(discriminant)) / (2 * A)
        root2 = (-B - math.sqrt(discriminant)) / (2 * A)
        if root1 < 0 and root2 < 0:
            return []
        elif root1 < 0:
            return [root2]
        elif root2 < 0:
            return [root1]
        else:
            return [root1, root2]
    elif discriminant == 0:
        root = -B / (2 * A)
        if root < 0:
            return []
        else:
            return [root]
    else:
        return []


for item in arr:
    n, m = item
    vert = vertical(n, m)
    hor = horizontal(n, m)
    if vert[1] < hor[1]:
        print("V", vert[0] + 1)
    else:
        print("H", hor[0] + 1)
