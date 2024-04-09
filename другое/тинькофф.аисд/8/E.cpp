#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>

using namespace std;

const int mod = 1000000000 + 7;
struct bit_node {
  int max_len;
  int freq;
};

class FenwickTree {
  vector<bit_node> bit;
  int size;
public:

  explicit FenwickTree(int size) : size(size) {
    bit.assign(size, {0, 0});
  }

  void update(int idx, bit_node node) {
    while (idx < size) {
      if (bit[idx].max_len < node.max_len) {
        bit[idx] = node;
      } else if (bit[idx].max_len == node.max_len) {
        bit[idx].freq = (bit[idx].freq + node.freq) % mod;
      }
      idx = idx | (idx + 1);
    }
  }

  struct bit_node query(int idx) {
    struct bit_node range_max = {0, 1};
    while (0 <= idx) {
      if (range_max.max_len < bit[idx].max_len) {
        range_max = bit[idx];
      } else if (range_max.max_len == bit[idx].max_len) {
        range_max.freq = (range_max.freq + bit[idx].freq) % mod;
      }
      idx = (idx & (idx + 1)) - 1;
    }
    return range_max;
  }
};

int findNumberOfLIS(vector<int> &nums) {
  set<int> sorted(nums.begin(), nums.end());

  unordered_map<int, int> num2index;

  int pos = 0;
  for (auto &num: sorted) {
    num2index[num] = pos++;
  }


  FenwickTree fwt((int) sorted.size() + 1);

  for (auto &num: nums) {
    int idx = num2index[num];
    bit_node node = fwt.query(idx - 1);
    fwt.update(idx, {node.max_len + 1, node.freq});
  }
  return fwt.query((int) sorted.size()).freq;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n;
  cin >> n;
  vector<int> nums(n);
  for (int i = 0; i < n; ++i) cin >> nums[i];
  cout << findNumberOfLIS(nums);
  return 0;
}