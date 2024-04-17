#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>

using namespace std;

class fenwick {
public:
  vector<int> f;

  explicit fenwick() {
    f.resize(1000001, 0);
  }

  int sm(int x) {
    int result = 0;
    for (; x >= 0; x = (x & (x + 1)) - 1) {
      result += f[x];
    }
    return result;
  }

  int sum(int l, int r) {
    if (l) return sm(r) - sm(l - 1);
    else return sm(r);
  }

  void inc(int i) {
    for (; i < 1000001; i |= i + 1) {
      f[i]++;
    }
  }

};

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n;
  cin >> n;
  vector<int> arr(n);
  for (int i = 0; i < n; ++i) cin >> arr[i];

  fenwick tree;
  int ans = 0;
  for (int i : arr) {
    auto q = tree.sum(i + 1, 1000000);
    ans += q;
    tree.inc(i);
  }
  cout << ans;
  return 0;
}