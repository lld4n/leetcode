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

  tree(vector<int> &arr) {
    n = (int) arr.size();
    t.resize(n * 2);
    build(arr, 0, 0, n);
  }


  void set(int i, int x, int xl, int xr) {
    if (xl == xr - 1) {
      t[x] = t[x] == 1 ? 0 : 1;
      return;
    }
    int xm = (xl + xr) / 2;
    if (i < xm) {
      set(i, 2 * x + 1, xl, xm);
    } else {
      set(i, 2 * x + 2, xm, xr);
    }
    t[x] = t[2 * x + 1] + t[2 * x + 2];
  }

  int kith(int k, int x, int xl, int xr) {
    if (xl == xr - 1) return xl;
    int xm = (xl + xr) / 2;
    if (t[x * 2 + 1] >= k) {
      return kith(k, x * 2 + 1, xl, xm);
    } else {
      return kith(k - t[x * 2 + 1], x * 2 + 2, xm, xr);
    }
  }

  void print() {
    for (auto q: t) {
      cout << q << " ";
    }
    cout << endl;
  }

private:
  vector<int> t;
  int n;

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
  for (int i = 0; i < n; ++i) cin >> arr[i];
  resize(arr);
  n = (int) arr.size();
  tree tree(arr);
  int f, s;
  for (int i = 0; i < m; ++i) {
    cin >> f >> s;
    if (f == 1) {
      tree.set(s, 0, 0, n);
    } else {
      cout << tree.kith(s + 1, 0, 0, n) << endl;
    }
  }
  return 0;
}