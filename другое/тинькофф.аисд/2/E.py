n = int(input())
lst = list(map(int, input().split()))

stack = []
cur = 0
ans = []
k = 0

while len(lst) > 0:
    item = lst.pop(0)
    stack.append(item)
    k += 1
    if len(stack) > 0 and cur + 1 == stack[-1]:
        ans.append([1, k])
        k = 0
    flag = False
    while len(stack) > 0 and cur + 1 == stack[-1]:
        flag = True
        k += 1
        cur = stack.pop()
    if flag:
        ans.append([2, k])
        k = 0


if cur == n:
    print(len(ans))
    for item in ans:
        print(" ".join(map(str, item)))
else:
    print(0)
