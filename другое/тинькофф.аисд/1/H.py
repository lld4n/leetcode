n = int(input())
strip = input()

arr = [0] * 123
for char in strip:
    arr[ord(char)] += 1
middle = ""
left = []

for i in range(len(arr)):
    if arr[i] != 0:
        while arr[i] > 1:
            left.append(chr(i))
            arr[i] -= 2
        if arr[i] == 1 and middle == "":
            middle = chr(i)

print("".join(left) + middle + "".join(left[::-1]))
