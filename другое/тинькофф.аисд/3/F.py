import sys
import random


class Treap:
    class Node:
        def __init__(self, init_k, init_p=None):
            self.key = init_k
            self.priority = init_p if init_p is not None else self._generate_priority()
            self.left = None
            self.right = None

        def _generate_priority(self):
            return random.randint(1, 400000)

    def __init__(self):
        self.treap_root = None

    def __del__(self):
        self._delete(self.treap_root)

    def _delete(self, root):
        if root is not None:
            self._delete(root.left)
            self._delete(root.right)
            del root

    def _split(self, root, key):
        if root is None:
            return None, None

        if key <= root.key:
            left, right = self._split(root.left, key)
            root.left = right
            return left, root
        else:
            left, right = self._split(root.right, key)
            root.right = left
            return root, right

    def _merge(self, left, right):
        if left is None:
            return right
        if right is None:
            return left

        if left.priority > right.priority:
            left.right = self._merge(left.right, right)
            return left
        else:
            right.left = self._merge(left, right.left)
            return right

    def _get_min(self, root):
        if root is None:
            return -1

        if root.left is None:
            return root.key

        return self._get_min(root.left)

    def add(self, key):
        left, right = self._split(self.treap_root, key)
        self.treap_root = self._merge(self._merge(left, self.Node(key)), right)

    def next(self, key):
        left, right = self._split(self.treap_root, key)
        next_value = self._get_min(right)
        self.treap_root = self._merge(left, right)

        return next_value


n = int(sys.stdin.readline())
tree = Treap()
y = 0
ans = []
for i in range(n):
    line = sys.stdin.readline()
    if line[0] == "+":
        tree.add((int(line.split()[1]) + y) % 10 ** 9)
        y = 0
    else:
        y = tree.next(int(line.split()[1]))
        ans.append(str(y))

sys.stdout.write("\n".join(ans))
