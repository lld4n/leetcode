#include <iostream>
#include <vector>

using namespace std;

void resize(vector<int> &arr) {
  int s = (int) arr.size();
  int new_s = (int) pow(2, ceil(log2(s)));
  arr.resize(new_s, 0);
}

vector<int> t;

void init(vector<int> &arr) {
  resize(arr);
  t.resize(arr.size() * 2, 0);
}

void add(int l, int r, int v, int x, int xl, int xr) {
  if (l >= xr || xl >= r) {
    return;
  }
  if (xl >= l && xr <= r) {
    t[x] += v;
    return;
  }
  int xm = (xl + xr) / 2;
  add(l, r, v, 2 * x + 1, xl, xm);
  add(l, r, v, 2 * x + 2, xm, xr);
}

int get(int i, int x, int xl, int xr) {
  if (xl == xr - 1) {
    return t[xl];
  }
  int xm = (xl + xr) / 2;
  if (xm > i) {
    return t[x] + get(i, 2 * x + 1, xl, xm);
  } else {
    return t[x] + get(i, 2 * x + 2, xm, xr);
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 0;
}