import math

line1 = input()
line2 = input()
line3 = input()

x1, y1 = map(float, line1.split())
x2, y2 = map(float, line2.split())
x3, y3 = map(float, line3.split())

r1 = math.sqrt(x1 ** 2 + y1 ** 2)
r2 = math.sqrt(x2 ** 2 + y2 ** 2)
r3 = math.sqrt(x3 ** 2 + y3 ** 2)


def check(r):
    if r <= 0.1:
        return 3
    if r <= 0.8:
        return 2
    if r <= 1:
        return 1
    return 0


ans = 0
ans += check(r1)
ans += check(r2)
ans += check(r3)
print(ans)
