n = int(input())

arr = []

for _ in range(n):
    line = input().strip()
    arr.append(list(map(int, line.split())))


def solve_quadratic_equation(A, B, C):
    discriminant = B * B - 4 * A * C
    if discriminant < 0:
        return None
    else:
        x1 = (-B + discriminant ** 0.5) // (2 * A)
        x2 = (-B - discriminant ** 0.5) // (2 * A)
        if x1 <= 0 and x2 <= 0:
            return None
        elif x1 <= 0:
            return [x2]
        elif x2 <= 0:
            return [x1]
        else:
            return [x1, x2]


for item in arr:
    n, m = item
    if n == 1:
        best = 0
        div = float('inf')
        S = (m * (m + 1)) // 2
        avg = S // 2
        for i in range(m - 1, 0, -1):
            b = (i * (i + 1)) // 2
            db = abs(avg - b)
            if db < div:
                div = db
                best = i
            else:
                break
        print("V", best + 1)
    elif m == 1:
        best = 0
        div = float('inf')
        S = (n * (n + 1)) // 2
        avg = S // 2
        for i in range(n - 1, 0, -1):
            b = (i * (i + 1)) // 2
            db = abs(avg - b)
            if db < div:
                div = db
                best = i
            else:
                break
        print("H", best + 1)
    else:
        S = (m * n * (m * n + 1)) // 2
        sigma = sum(1 + m * i for i in range(n))
        x = ((0.5 * S) + n) // (sigma + n)
        value_x = x * (sigma + n) - n
        div_x = S - 2 * value_x
        ans_y = solve_quadratic_equation(m ** 2, m, -S)
        if ans_y is None:
            print("V", int(x + 1))
        elif len(ans_y) == 1:
            y = ans_y[0]
            value_y = ((y * m) * (y * m + 1)) // 2
            div_y = S - 2 * value_y
            if div_x < div_y:
                print("V", int(x + 1))
            else:
                print("H", int(y + 1))
