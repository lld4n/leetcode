import sys


class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def sl(self, node):
        self.left = node

    def sr(self, node):
        self.right = node


n, _r = map(int, sys.stdin.readline().split())

nodes = [TreeNode(i) for i in range(n)]

for i in range(n):
    l, r = map(int, sys.stdin.readline().split())
    if l != -1:
        nodes[i].sl(nodes[l])
    if r != -1:
        nodes[i].sr(nodes[r])

root = nodes[_r]


def dfs(node, minv, maxv):
    if node is None:
        return 0

    if node.value <= minv or node.value >= maxv:
        return -1
    lh = dfs(node.left, minv, node.value)
    rh = dfs(node.right, node.value, maxv)
    if lh == -1:
        return -1
    if rh == -1:
        return -1

    if abs(lh - rh) > 1:
        return -1

    return max(lh, rh) + 1


ans = dfs(root, float('-inf'), float('inf'))

if ans == -1:
    print(0)
else:
    print(1)
