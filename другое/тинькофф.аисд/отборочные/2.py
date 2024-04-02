count = input()
line = input().split("#")
lengths = [len(s) for s in line]
print(str(min(lengths)) + " " + str(max(lengths)))

