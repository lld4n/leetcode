import math

c = float(input())


def equation(y, C):
    return y ** 2 + math.sqrt(y + 1) - C


def derivative(y):
    return 2 * y + 1 / (2 * math.sqrt(y + 1))


def newton_method(C):
    y = 1.0
    eps = 1e-6
    while abs(equation(y, C)) > eps:
        y = y - equation(y, C) / derivative(y)
    return y


x = newton_method(c)
print(x)
