lst = input().split()


def evalRPN(tokens):
    stack = []
    for token in tokens:
        if token == "+":
            second = stack.pop()
            first = stack.pop()
            stack.append(first + second)
        elif token == "-":
            second = stack.pop()
            first = stack.pop()
            stack.append(first - second)
        elif token == "*":
            second = stack.pop()
            first = stack.pop()
            stack.append(first * second)
        elif token == "/":
            second = stack.pop()
            first = stack.pop()
            res = first / second
            if res > 0:
                stack.append(int(res))
            else:
                stack.append(-int(-res))
        else:
            stack.append(int(token))
    return stack[0]


print(evalRPN(lst))
