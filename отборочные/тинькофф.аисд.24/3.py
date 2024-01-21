n = int(input())
a = list(map(int, input().split()))

mm = max(a) * (n - 1)
total = 0


def is_all_equal(arr):
    return all(x == arr[0] for x in arr)


def area(s, e):
    if s == e:
        return s

    if s > 0 and e > 0:
        h = min(s, e)
        return h + (abs(s - e) / 2)
    else:
        return abs(s - e) / 2


for i in range(n - 1):
    total += area(a[i], a[i + 1])

print((total / mm) * max(a))
