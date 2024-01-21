from functools import reduce

numbers = [
    input(),
    input()
]
result = reduce(lambda x, y: x + y, map(lambda i: int(i), numbers))
print(result)
