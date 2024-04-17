#include <iostream>
#include <vector>

using namespace std;


struct Node {
  int number, segments, set, left, right;
  bool up;

  Node() {}

  Node(int _left, int _right) {
    number = segments = 0;
    set = up = false;
    left = _left;
    right = _right;
  }
};


void build(vector<Node> &tree, int v, int tl, int tr) {
  tree[v] = Node(tl, tr);

  if (tl != tr) {
    int tm = (tl + tr) / 2;
    build(tree, v * 2, tl, tm);
    build(tree, v * 2 + 1, tm + 1, tr);
  }
}

void push(vector<Node> &tree, int v) {
  if (!tree[v].up) return;

  tree[v].number = (tree[v].set ? (tree[v].right - tree[v].left + 1) : 0);
  tree[v].segments = (tree[v].set ? 1 : 0);
  tree[v].up = false;

  if (tree[v].left == tree[v].right) return;

  tree[v * 2].set = tree[v * 2 + 1].set = tree[v].set;
  tree[v * 2].up = tree[v * 2 + 1].up = true;
}

void update(vector<Node> &tree, int v, bool value, int l, int r) {
  if (tree[v].right < l || tree[v].left > r) return;

  if (tree[v].right <= r && tree[v].left >= l) {
    push(tree, v);
    tree[v].set = value;
    tree[v].up = true;
    return;
  }

  push(tree, v);
  update(tree, v * 2, value, l, r);
  update(tree, v * 2 + 1, value, l, r);


  int cur = v * 2;
  while (true) {
    push(tree, cur);
    if (tree[cur].left == tree[cur].right) break;
    cur = cur * 2 + 1;
  }
  bool left = (tree[cur].number == 1);

  cur = v * 2 + 1;
  while (true) {
    push(tree, cur);
    if (tree[cur].left == tree[cur].right) break;
    cur = cur * 2;
  }
  bool right = (tree[cur].number == 1);


  tree[v].number = tree[v * 2].number + tree[v * 2 + 1].number;
  tree[v].segments = tree[v * 2].segments + tree[v * 2 + 1].segments;

  if (left && right) --tree[v].segments;
}

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  vector<Node> tree(1'000'100 * 4);
  build(tree, 1, 0, 1'000'100);

  int n;
  cin >> n;

  int x, l;
  char color;
  for (int req = 0; req < n; ++req) {
    cin >> color >> x >> l;

    if (l > 0) {
      --l;
    } else {
      ++l;
    }

    update(tree, 1, (color == 'B'), x + 500'000, x + l + 500'000);

    cout << tree[1].segments << ' ' << tree[1].number << endl;
  }
}