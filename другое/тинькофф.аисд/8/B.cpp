#include <iostream>
#include <vector>
#include <cmath>
#include <climits>

using namespace std;


void resize(vector<int> &arr) {
  int s = (int) arr.size();
  int new_s = (int) pow(2, ceil(log2(s)));
  while (s < new_s) {
    s++;
    arr.push_back(INT_MAX);
  }
}

typedef pair<long long, int> Type;

class tree {
public:
  vector<Type> t;
  int n;

  explicit tree(vector<int> &arr) {
    n = (int) arr.size();
    t.resize(2 * n);
    build(arr, 0, 0, n);
  }

  void set(int i, int v, int x, int xl, int xr) {
    if (xl == xr - 1) {
      t[x] = {v, 1};
      return;
    }
    int xm = (xl + xr) / 2;
    if (i < xm) {
      set(i, v, 2 * x + 1, xl, xm);
    } else {
      set(i, v, 2 * x + 2, xm, xr);
    }
    t[x] = combine(t[x * 2 + 1], t[x * 2 + 2]);
  }

  Type mmin(int l, int r, int x, int xl, int xr) {
    if (r <= xl || l >= xr) {
      return {LLONG_MAX, 0};
    }
    if (xl >= l && xr <= r) {
      return t[x];
    }
    int xm = (xl + xr) / 2;
    auto left = mmin(l, r, 2 * x + 1, xl, xm);
    auto right = mmin(l, r, 2 * x + 2, xm, xr);

    return combine(left, right);
  }


private:
  Type combine(Type a, Type b) {
    if (a.first < b.first) return a;
    if (b.first < a.first) return b;
    return {a.first, a.second + b.second};
  }

  void build(vector<int> &arr, int v, int tl, int tr) {
    if (tl == tr - 1) {
      t[v] = {arr[tl], 1};
    } else {
      int tm = (tl + tr) / 2;
      build(arr, v * 2 + 1, tl, tm);
      build(arr, v * 2 + 2, tm, tr);
      t[v] = combine(t[v * 2 + 1], t[v * 2 + 2]);
    }
  }
};


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, m;
  cin >> n >> m;
  vector<int> arr(n);
  for (int i = 0; i < n; ++i) {
    cin >> arr[i];
  }
  resize(arr);
  n = (int) arr.size();

  tree tree(arr);
  int q, f, s;
  for (int i = 0; i < m; ++i) {
    cin >> q >> f >> s;
    if (q == 1) {
      tree.set(f, s, 0, 0, n);
    } else {
      auto t = tree.mmin(f, s, 0, 0, n);
      cout << t.first << " " << t.second << endl;
    }

  }


  return 0;
}