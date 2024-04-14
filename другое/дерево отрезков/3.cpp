#include <iostream>

using namespace std;

#include <iostream>
#include <vector>

using namespace std;

class SegmentTree {
private:
  vector<int> t;
  int n;

public:
  void build(vector<int> &nums) {
    n = (int) nums.size();
    t.resize(2 * n);
    for (int i = 0; i < n; i++) {
      t[n + i - 1] = nums[i];
    }
    for (int i = n - 1; i > 0; i--) {
      t[i] = t[2 * i + 1] + t[2 * i + 2];
    }
  }

  void set(int i, int v) {
    int x = n + i - 1;
    t[x] = v;
    while (x != 0) {
      x = (x - 1) / 2;
      t[x] = t[2 * x + 1] + t[2 * x + 2];
    }
  }

  int sumRange(int l, int r) {
    l = l + n - 1;
    r = r + n - 2;
    int ans = 0;
    while (l <= r) {
      if (l % 2 == 0) ans += t[l];
      l = l / 2;
      if (r % 2 == 1) ans += t[r];
      r = r / 2 - 1;
    }
    return ans;
  }
};


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 0;
}