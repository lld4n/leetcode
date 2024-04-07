#include <iostream>
#include <vector>
#include <cmath>

using namespace std;


void resize(vector<int> &arr) {
  int s = (int) arr.size();
  int new_s = (int) pow(2, ceil(log2(s)));
  while (s < new_s) {
    s++;
    arr.push_back(0);
  }
}

class tree {
public:
  vector<long long> t;
  int n;

  explicit tree(vector<int> &arr) {
    n = (int) arr.size();
    t.resize(2 * n);
    build(arr, 0, 0, n);
  }

  void set(int i, int v, int x, int xl, int xr) {
    if (xl == xr - 1) {
      t[x] = v;
      return;
    }
    int xm = (xl + xr) / 2;
    if (i < xm) {
      set(i, v, 2 * x + 1, xl, xm);
    } else {
      set(i, v, 2 * x + 2, xm, xr);
    }
    t[x] = t[2 * x + 1] + t[2 * x + 2];
  }

  long long sum(int l, int r, int x, int xl, int xr) {
    if (r <= xl || l >= xr) {
      return 0;
    }
    if (xl >= l && xr <= r) {
      return t[x];
    }
    int xm = (xl + xr) / 2;
    return sum(l, r, 2 * x + 1, xl, xm) + sum(l, r, 2 * x + 2, xm, xr);
  }


private:
  void build(vector<int> &arr, int v, int tl, int tr) {
    if (tl == tr - 1) {
      t[v] = arr[tl];
    } else {
      int tm = (tl + tr) / 2;
      build(arr, v * 2 + 1, tl, tm);
      build(arr, v * 2 + 2, tm, tr);
      t[v] = t[v * 2 + 1] + t[v * 2 + 2];
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
      cout << tree.sum(f, s, 0, 0, n) << endl;
    }

  }


  return 0;
}