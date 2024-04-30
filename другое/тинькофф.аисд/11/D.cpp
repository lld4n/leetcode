#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int L, N;
  cin >> L >> N;
  vector<int> cuts(N + 2, 0);
  for (int i = 1; i <= N; i++) {
    cin >> cuts[i];
  }
  cuts[N + 1] = L;
  vector<vector<int>> dp(N + 2, vector<int>(N + 2, 0));
  for (int i = N + 1; i >= 0; i--) {
    for (int j = i + 1; j <= N + 1; j++) {
      if (j - i == 1) {
        dp[i][j] = 0;
        continue;
      }
      dp[i][j] = INT_MAX;
      for (int k = i + 1; k < j; k++) {
        dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j] + cuts[j] - cuts[i]);
      }
    }
  }
  cout << dp[0][N + 1];
  return 0;
}