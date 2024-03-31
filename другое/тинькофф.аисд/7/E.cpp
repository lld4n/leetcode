#include <iostream>
#include <string>
#include <algorithm>

using namespace std;


int d(string &a, string &b) {
  int n = (int) a.length();
  int m = (int) b.length();

  int dp[n + 1][m + 1];

  for (int i = 0; i <= n; i++) {
    for (int j = 0; j <= m; j++) {
      if (i == 0) {
        dp[i][j] = j;
      } else if (j == 0) {
        dp[i][j] = i;
      } else {
        dp[i][j] = min({
                         dp[i - 1][j] + 1,
                         dp[i][j - 1] + 1,
                         dp[i - 1][j - 1] + (a[i - 1] != b[j - 1])
                       });
        if (
          i > 1 &&
          j > 1 &&
          a[i - 1] == b[j - 2] &&
          a[i - 2] == b[j - 1]
          ) {
          dp[i][j] = min(dp[i][j], dp[i - 2][j - 2] + 1);
        }
      }
    }
  }

  return dp[n][m];
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string A, B;
  cin >> A >> B;

  cout << d(A, B);

  return 0;
}