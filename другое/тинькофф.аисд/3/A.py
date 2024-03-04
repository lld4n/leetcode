import sys

n = int(sys.stdin.readline())
lst = list(map(int, sys.stdin.readline().split()))


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.children = []

    def add_child(self, node):
        self.children.append(node)

    def __str__(self):
        return str(self.val)


def diametr(node):
    def dfs(root):
        if root.val == -1:
            return 0
        m1 = 0
        m2 = 0
        nonlocal ans
        for child in root.children:
            t = dfs(child)
            if t > m1:
                m2, m1 = m1, t
            elif t > m2:
                m2 = t
        ans = max(ans, m1 + m2)
        return 1 + m1

    ans = 0
    dfs(node)
    return ans


def diametr2(node):
    if not node:
        return 0

    stack = [(node, False)]
    ans = 0
    levels = {}

    while stack:
        current, visited = stack.pop()

        if not current:
            continue

        if visited:
            m1 = 0
            m2 = 0
            for child in current.children:
                t = levels.get(child, 0)
                if t > m1:
                    m2, m1 = m1, t
                elif t > m2:
                    m2 = t
            levels[current] = 1 + m1
            ans = max(ans, m1 + m2)
        else:
            stack.append((current, True))
            stack.extend((child, False) for child in current.children)

    return ans


depth = [-1] * 100003
nodes = [TreeNode(-1)] * 100003

depth[0] = 0
nodes[0] = TreeNode(0)

maxDepth = 0

for i in range(len(lst)):
    depth[i + 1] = depth[lst[i]] + 1
    if depth[i + 1] > maxDepth:
        maxDepth = depth[i + 1]
    nodes[i + 1] = TreeNode(i + 1)
    nodes[lst[i]].add_child(nodes[i + 1])

print(maxDepth, diametr2(nodes[0]))
print(' '.join(map(str, depth[:n])))
