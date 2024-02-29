n = int(input())
nums = [int(s) for s in input().split()]
arr = [0] * n
flag = False
result = []
result.append(1)
for i in range(len(nums)):
    arr[nums[i]-1] = 1
    flag = False
    j = len(arr)-1
    while j >= 0:
        if not flag and arr[j] == 0:
            flag = True
            break
        j -= 1
    c = i - len(arr) + j + 3
    result.append(c)
print(' '.join(str(s) for s in result))