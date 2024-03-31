#include <iostream>
#include <vector>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  vector<int> cost(n + 1);
  for (int i = 1; i < n + 1; ++i) {
    cin >> cost[i];
  }

  vector<int> dp(n + 1, 0);
  dp[1] = cost[1];

  for (int i = 2; i < dp.size(); ++i) {
    dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i];
  }


  cout << dp[dp.size() - 1];

  return 0;
}