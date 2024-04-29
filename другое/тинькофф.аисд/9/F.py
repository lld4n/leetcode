import sys


class dor:
    def __init__(self, _x, _y, _id):
        self.x = _x
        self.y = _y
        self.id = _id


n = int(sys.stdin.readline().split()[2])
dors = []
for i in range(n):
    x, y = map(float, sys.stdin.readline().split())
    dors.append(dor(int(x * 2), int(y * 2), i))

y = [center.y for center in dors]
y.sort()
y = list(dict.fromkeys(y))

dors.sort(key=lambda center: center.x)
x = [0] * len(y)


def ge(_index):
    sum_val = 0
    while _index >= 0:
        sum_val += x[_index]
        _index = (_index & (_index + 1)) - 1
    return sum_val


def adds(_index, extra):
    while _index < len(x):
        x[_index] += extra
        _index |= (_index + 1)


def addr(_first, _after, extra):
    if _first is not None:
        adds(_first, extra)
    if _after is not None:
        adds(_after, -extra)


ans = [0] * n
for center in dors:
    index = y.index(center.y)
    dist = center.x - ge(index)
    ans[center.id] = dist
    first = next((i for i, val in enumerate(y) if val > center.y - dist), None)
    after = next((i for i, val in enumerate(y) if val > center.y + dist), None)
    addr(first, after, dist * 2)

for value in ans:
    sys.stdout.write(str(value) + ' ')
