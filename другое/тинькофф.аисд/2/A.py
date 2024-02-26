class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, x):
        self.stack.append(x)
        if not self.min_stack or x <= self.min_stack[-1]:
            self.min_stack.append(x)

    def pop(self):
        if self.stack[-1] == self.min_stack[-1]:
            self.min_stack.pop()
        return self.stack.pop()

    def get_min(self):
        return self.min_stack[-1]


n = int(input())
min_stack = MinStack()

for _ in range(n):
    operation = input().split()
    if operation[0] == '1':
        x = int(operation[1])
        min_stack.push(x)
    elif operation[0] == '2':
        min_stack.pop()
    elif operation[0] == '3':
        print(min_stack.get_min())
