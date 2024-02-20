ln = int(input())
arr = list(map(int, input().split()))

lst = [0] * ln
ans = [1]
cL = 0
zero = ln - 1

for item in arr:
    lst[item - 1] = 1
    if item - 1 == zero:
        for i in range(zero - 1, -1, -1):
            if lst[i] == 0:
                zero = i
                break
            else:
                cL -= 1
    else:
        cL += 1

    ans.append(cL + 1)

print(" ".join(map(str, ans)))
