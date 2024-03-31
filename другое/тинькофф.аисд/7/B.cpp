#include <iostream>
#include <vector>

using namespace std;


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  vector<pair<int, int>> dp;
  dp.emplace_back(1, 2);

  while (dp.size() != n) {
    pair<int, int> last = dp.back();
    dp.emplace_back(last.second, (last.first + last.second) * 2);
  }
  pair<int, int> last = dp.back();
  cout << last.first + last.second;


  return 0;
}