def find_cubic_root(a, b, c, d):
    epsilon = 1e-6
    x = 1.0
    while True:
        fx = a * x ** 3 + b * x ** 2 + c * x + d
        f_prime_x = 3 * a * x ** 2 + 2 * b * x + c
        if f_prime_x == 0:
            break
        x_new = x - fx / f_prime_x
        if abs(x_new - x) < epsilon:
            break
        x = x_new
    return round(x, 4)


a, b, c, d = map(int, input().split())

root = find_cubic_root(a, b, c, d)
print(root)
