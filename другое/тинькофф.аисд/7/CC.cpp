#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);


  int n, k;
  cin >> n >> k;

  vector<int> pillars(n, 0);
  for (size_t i = 1; i < n - 1; ++i) {
    cin >> pillars[i];
  }


  vector<int> money(n, 0);
  for (int i = 1; i < money.size(); ++i) {
    size_t last_stone = max(0, i - k);
    auto it = max_element(money.begin() + last_stone, money.begin() + i);
    money[i] = pillars[i] + *it;
  }

  vector<bool> path(n, false);
  path.back() = true;
  int steps = 0;
  for (int i = n - 1; i > 0;) {
    size_t last_stone = max(0, i - k);
    auto it = max_element(money.begin() + last_stone, money.begin() + i);
    i = it - money.begin();
    path[i] = true;
    ++steps;
  }


  cout << money.back() << endl;
  cout << steps << endl;

  for (size_t i = 0; i < path.size(); ++i) {
    if (path[i])
      cout << i + 1 << " ";
  }
  return 0;
}