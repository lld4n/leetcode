#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;


struct Center {
  int x;
  int y;
  int id;

  Center(int _x, int _y, int _id) : x(_x), y(_y), id(_id) {}
};

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n;
  cin >> n;
  vector<Center> centers;
  for (int i = 0; i < n; ++i) {
    double x, y;
    cin >> x >> y;
    centers.emplace_back(int(x * 2), int(y * 2), i);
  }

  vector<int> y;
  for (const auto &center: centers) {
    y.push_back(center.y);
  }
  sort(y.begin(), y.end());
  y.erase(unique(y.begin(), y.end()), y.end());

  sort(centers.begin(), centers.end(),
       [](const Center &a, const Center &b) {
         return a.x < b.x;
       });

  vector<int> x(y.size(), 0);

  auto get_x = [&x](int _index) {
    int sum_val = 0;
    while (_index >= 0) {
      sum_val += x[_index];
      _index = (_index & (_index + 1)) - 1;
    }
    return sum_val;
  };

  auto add_since_x = [&x](int _index, int extra) {
    while (_index < x.size()) {
      x[_index] += extra;
      _index |= (_index + 1);
    }
  };

  auto add_range_x = [&add_since_x](int _first, int _after, int extra) {
    if (_first != -1) {
      add_since_x(_first, extra);
    }
    if (_after != -1) {
      add_since_x(_after, -extra);
    }
  };

  vector<int> ans(n, 0);
  for (const auto &center: centers) {
    int index = find(y.begin(), y.end(), center.y) - y.begin();
    int dist = center.x - get_x(index);
    ans[center.id] = dist;
    int first = -1, after = -1;
    for (size_t i = 0; i < y.size(); ++i) {
      if (y[i] > center.y - dist) {
        first = i;
        break;
      }
    }
    for (size_t i = 0; i < y.size(); ++i) {
      if (y[i] > center.y + dist) {
        after = i;
        break;
      }
    }
    add_range_x(first, after, dist * 2);
  }

  for (const auto &value: ans) {
    cout << value << ' ';
  }

  return 0;
}
