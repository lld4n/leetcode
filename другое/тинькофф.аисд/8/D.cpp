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
    size = (int) arr.size();
    t.resize(2 * size);
    build(arr, 0, 0, size);
  }


  void set(int i, int v, int x, int lx, int rx) {
    if (rx - lx == 1) {
      t[x] = v;
      return;
    }
    int m = (lx + rx) / 2;
    if (i < m) {
      set(i, v, 2 * x + 1, lx, m);
    } else {
      set(i, v, 2 * x + 2, m, rx);
    }
    t[x] = max(t[2 * x + 1], t[2 * x + 2]);
  }

  int above(int v, int l, int x, int lx, int rx) {
    if (t[x] < v)
      return -1;
    if (rx <= l)
      return -1;
    if (rx == lx + 1) {
      return lx;
    }
    int m = (lx + rx) / 2;
    int res = above(v, l, 2 * x + 1, lx, m);
    if (res == -1) {
      res = above(v, l, 2 * x + 2, m, rx);
    }
    return res;
  }

private:
  vector<long long> t;
  int size;


  void build(vector<int> &a, int x, int lx, int rx) {
    if (rx - lx == 1) {
      if (lx < a.size()) {
        t[x] = a[lx];
      }
    } else {
      int m = (lx + rx) / 2;
      build(a, 2 * x + 1, lx, m);
      build(a, 2 * x + 2, m, rx);
      t[x] = max(t[2 * x + 1], t[2 * x + 2]);
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
  tree t(arr);
  int v, a, b;
  for (int i = 0; i < m; i++) {
    cin >> v;
    if (v == 1) {
      cin >> a >> b;
      t.set(a, b, 0, 0, n);
    } else {
      cin >> a >> b;
      cout << t.above(a, b, 0, 0, n) << endl;
    }
  }
  return 0;
}