#include <iostream>
#include <cmath>
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

class segtree {
public:
  vector<long long> t;
  vector<long long> d;

  segtree(int n) {
    t.resize(2 * n, 0);
    d.resize(2 * n, 0);
  }

  void print() {
    for (auto i: t) {
      cout << i << " ";
    }
    cout << endl;
    for (auto j: d) {
      cout << j << " ";
    }
  }


  void change(int l, int r, int v, int x, int xl, int xr) {
    if (l >= xr || xl >= r) {
      return;
    }
    if (xl >= l && xr <= r) {
      d[x] += v;
      t[x] += v;
      return;
    }
    propagate(x);
    int xm = (xl + xr) / 2;
    change(l, r, v, 2 * x + 1, xl, xm);
    change(l, r, v, 2 * x + 2, xm, xr);
    t[x] = min(t[2 * x + 1], t[2 * x + 2]);
  }

  long long calc(int l, int r, int x, int xl, int xr) {
    if (l >= xr || xl >= r) {
      return LONG_LONG_MAX;
    }
    if (xl >= l && xr <= r) {
      return t[x];
    }
    propagate(x);
    int xm = (xl + xr) / 2;
    auto s1 = calc(l, r, 2 * x + 1, xl, xm);
    auto s2 = calc(l, r, 2 * x + 2, xm, xr);
    return min(s1, s2);
  }

private:
  void propagate(int x) {
    t[2 * x + 1] += d[x];
    d[2 * x + 1] += d[x];
    t[2 * x + 2] += d[x];
    d[2 * x + 2] += d[x];
    d[x] = 0;
  }


};

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n, m;
  cin >> n >> m;
  n = (int) pow(2, ceil(log2(n)));
  int type;
  int l, r, v;
  segtree tree(n);
  for (int i = 0; i < m; ++i) {
    cin >> type;
    if (type == 1) {
      cin >> l >> r >> v;
      tree.change(l, r, v, 0, 0, n);
    } else {
      cin >> l >> r;
      cout << tree.calc(l, r, 0, 0, n) << endl;
    }
  }
  return 0;
}