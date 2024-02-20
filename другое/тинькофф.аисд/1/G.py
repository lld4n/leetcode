n = int(input())

lst = [0] * n
arr = []
for i in range(1, n + 1):
    arr.append(i)
i = 1
lst[(n - 1) // 2] = arr.pop()
index = (n - 1) // 2
while len(arr) > 0:
    if n % 2 == 0:
        if lst[index + i] == 0:
            lst[index + i] = arr.pop()
        if lst[index - i] == 0:
            lst[index - i] = arr.pop()
    else:
        lst[index - i] = arr.pop()
        lst[index + i] = arr.pop()
    i += 1

print(' '.join(map(str, lst)))
