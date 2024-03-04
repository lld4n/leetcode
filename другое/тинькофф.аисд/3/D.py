class Heap:
    def __init__(self):
        self.array = []

    def add(self, item):
        self.array.append(item)
        self.up(len(self.array) - 1)

    def up(self, index):
        parent_index = (index - 1) // 2
        while index > 0 and self.array[parent_index] < self.array[index]:
            self.array[parent_index], self.array[index] = self.array[index], self.array[parent_index]
            index = parent_index
            parent_index = (index - 1) // 2

    def remove(self):
        max_value = self.array[0]
        self.array[0] = self.array[-1]
        self.array.pop()
        self.down(0)
        return max_value

    def down(self, index):
        cur = index
        left = 2 * index + 1
        right = 2 * index + 2
        if left < len(self.array) and self.array[left] > self.array[cur]:
            cur = left
        if right < len(self.array) and self.array[right] > self.array[cur]:
            cur = right
        if cur != index:
            self.array[index], self.array[cur] = self.array[cur], self.array[index]
            self.down(cur)


n = int(input())
ans = []
heap = Heap()
for _ in range(n):
    line = input().split()
    if line[0] == "0":
        heap.add(int(line[1]))
    else:
        print(heap.remove())
#
# for i in range(len(ans)):
#     sys.stdout.write(str(ans[i]) + '\n')
