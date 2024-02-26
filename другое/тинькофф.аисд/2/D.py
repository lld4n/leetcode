n = int(input())
lst = list(map(int, input().split()))

lst.append(-1)
stack = []


def c():
    if len(stack) < 3:
        return False
    return stack[-1] == stack[-2] == stack[-3]


for i in range(len(lst) - 1):
    stack.append(lst[i])
    if lst[i] != lst[i + 1] and c():
        b = stack.pop()
        while len(stack) > 0 and stack[-1] == b:
            stack.pop()

print(n - len(stack))
