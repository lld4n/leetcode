#include <iostream>
#include <vector>
#include <algorithm>
#include <set>

using namespace std;
struct bit_node {
  long long max_len;
  long long freq;
};

class FenwickTree {
  vector<bit_node> bit;
  long long size;
public:
  FenwickTree(long long size) : size(size) {
    bit.assign(size, {0, 0});
  }

  void update(long long idx, bit_node node) {
    while (idx < size) {
      if (bit[idx].max_len < node.max_len) {
        bit[idx] = node;
      } else if (bit[idx].max_len == node.max_len) {
        bit[idx].freq += node.freq;
      }
      idx = idx | (idx + 1);
    }
  }

  struct bit_node query(long long idx) {
    struct bit_node range_max = {0, 1};
    while (0 <= idx) {
      if (range_max.max_len < bit[idx].max_len) {
        range_max = bit[idx];
      } else if (range_max.max_len == bit[idx].max_len) {
        range_max.freq += bit[idx].freq;
      }
      idx = (idx & (idx + 1)) - 1;
    }
    return range_max;
  }
};

long long findNumberOfLIS(vector<long long> &nums) {
  const auto N = (long long) nums.size();
  set<long long> sorted(nums.begin(), nums.end());
  unordered_map<long long, long long> num2index;
  long long pos = 0;
  for (auto &num: sorted) {
    num2index[num] = pos++;
  }

  FenwickTree fwt(sorted.size() + 1);

  for (auto &num: nums) {
    long long idx = num2index[num];
    bit_node node = fwt.query(idx - 1);
    fwt.update(idx, {node.max_len + 1, node.freq});
  }
  return fwt.query(sorted.size()).freq;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  long long n;
  cin >> n;
  vector<long long> nums(n);
  for (int i = 0; i < n; ++i) cin >> nums[i];
  cout << findNumberOfLIS(nums);
  return 0;
}