a, b, c, d = map(int, input().split())


def F(x):
    return a * (x ** 3) + b * (x ** 2) + c * x + d


def solve_eq(f, a, b, thres=0.000001):
    y_a = f(a)
    y_b = f(b)
    direction = f(b) - f(a)

    if not y_a * y_b < 0:
        return None

    dif = b - a
    while dif > thres:
        c = a + (b - a) / 2
        y = f(c)
        if y == 0:
            return c
        if y * direction > 0:
            b = c
        else:
            a = c
        dif = b - a

    return b


print(round(solve_eq(F, -1000, 1000), 4))
