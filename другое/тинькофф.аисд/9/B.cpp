#include <iostream>
#include <vector>
#include <cmath>
#include <climits>

using namespace std;

struct Node {
  long long real;
  long long assignment;
  long long addition;
};

class segtree {
public:
  explicit segtree(int nn) {
    tree.resize(2 * nn, {0, LLONG_MAX, 0});

  }


  vector<Node> tree;

  void push_set(long long v, long long lx, long long rx) {
    if (tree[v].assignment == LLONG_MAX) {
      return;
    }
    tree[v].real = (rx - lx) * tree[v].assignment;
    if (rx - lx != 1) {
      tree[2 * v + 1].assignment = tree[2 * v +
                                        2].assignment = tree[v].assignment;
      tree[2 * v + 1].addition = tree[2 * v + 2].addition = 0;
    }
    tree[v].assignment = LLONG_MAX;
  }

  void push_add(long long v, long long lx, long long rx) {
    if (tree[v].addition == 0) {
      return;
    }
    tree[v].real += (rx - lx) * tree[v].addition;
    if (rx - lx != 1) {
      tree[2 * v + 1].addition += tree[v].addition;
      tree[2 * v + 2].addition += tree[v].addition;
      long long m = (lx + rx) / 2;
      push_set(2 * v + 1, lx, m);
      push_set(2 * v + 2, m, rx);
      tree[2 * v + 1].assignment = tree[2 * v + 2].assignment = LLONG_MAX;
    }
    tree[v].addition = 0;
  }

  void
  update_set(long long l, long long r, long long val, long long v, long long lx,
             long long rx) {
    if (tree[v].addition == 0) {
      push_set(v, lx, rx);
    } else {
      push_add(v, lx, rx);
    }
    if (l >= rx or r <= lx) {
      return;
    }
    if (lx >= l and rx <= r) {
      tree[v].assignment = val;
      if (tree[v].addition == 0) {
        push_set(v, lx, rx);
      } else {
        push_add(v, lx, rx);
      }
      return;
    }
    long long m = (lx + rx) / 2;
    update_set(l, r, val, 2 * v + 1, lx, m);
    update_set(l, r, val, 2 * v + 2, m, rx);
    tree[v] = {tree[2 * v + 1].real + tree[2 * v + 2].real, LLONG_MAX, 0};
  }

  void
  update_add(long long l, long long r, long long val, long long v, long long lx,
             long long rx) {
    if (tree[v].addition == 0) {
      push_set(v, lx, rx);
    } else {
      push_add(v, lx, rx);
    }
    if (l >= rx or r <= lx) {
      return;
    }
    if (lx >= l and rx <= r) {
      tree[v].addition = val;
      if (tree[v].addition == 0) {
        push_set(v, lx, rx);
      } else {
        push_add(v, lx, rx);
      }
      return;
    }
    long long m = (lx + rx) / 2;
    update_add(l, r, val, 2 * v + 1, lx, m);
    update_add(l, r, val, 2 * v + 2, m, rx);
    tree[v] = {tree[2 * v + 1].real + tree[2 * v + 2].real, LLONG_MAX, 0};
  }

  long long
  get(long long l, long long r, long long v, long long lx, long long rx) {
    if (tree[v].addition == 0) {
      push_set(v, lx, rx);
    } else {
      push_add(v, lx, rx);
    }
    if (l >= rx or r <= lx) {
      return 0;
    }
    if (lx >= l and rx <= r) {
      return tree[v].real;
    }
    long long m = (lx + rx) / 2;
    long long left = get(l, r, 2 * v + 1, lx, m);
    long long right = get(l, r, 2 * v + 2, m, rx);
    return (left + right);
  }
};

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n, m;
  cin >> n >> m;
  n = (int) pow(2, ceil(log2(n)));
  segtree tree(n);
  int type, l, r, v;
  for (int i = 0; i < m; i++) {
    cin >> type;
    if (type == 1) {
      cin >> l >> r >> v;
      tree.update_set(l, r, v, 0, 0, n);
    } else if (type == 2) {
      cin >> l >> r >> v;
      tree.update_add(l, r, v, 0, 0, n);
    } else {
      cin >> l >> r;
      cout << tree.get(l, r, 0, 0, n) << endl;
    }
  }
  return 0;
}