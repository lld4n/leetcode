#include <iostream>
#include <vector>

using namespace std;
int n, m;

bool nonValid(int i, int j) {
  return i < 0 || i >= n || j < 0 || j >= m;
}

void d(vector<vector<int>> &dp, int i, int j) {
  if (nonValid(i, j)) {
    return;
  }
  dp[i][j]++;

  d(dp, i - 1, j + 2);
  d(dp, i + 1, j + 2);
  d(dp, i + 2, j + 1);
  d(dp, i + 2, j - 1);

}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);


  cin >> n >> m;


  vector<vector<int>> dp;

  for (int i = 0; i < n; ++i) {
    vector<int> b(m, 0);
    dp.push_back(b);
  }


  d(dp, 0, 0);

  cout << dp[n - 1][m - 1];

  return 0;
}