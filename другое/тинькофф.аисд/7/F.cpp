#include <iostream>
#include <vector>


using namespace std;


int mm(vector<vector<int>> &m, int &x, int &y) {
  vector<int> dp(m[0].size() + 1, 0);

  int max = 0;
  int prev = 0;
  for (int i = 1; i <= m.size(); ++i) {
    for (int j = 1; j <= m[0].size(); ++j) {
      int temp = dp[j];
      if (m[i - 1][j - 1] == 1) {
        dp[j] = min(
          min(dp[j - 1], dp[j]),
          prev
        ) + 1;
        if (max <= dp[j]) {
          max = dp[j];
          y = j - (max - 1);
          x = i - (max - 1);
        }
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
  }

  return max;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, m;
  cin >> n >> m;

  vector<vector<int>> input(n, vector<int>(m));
  for (auto &row: input) {
    for (auto &bit: row) {
      cin >> bit;
    }
  }

  int x, y;
  cout << mm(input, x, y) << endl;
  cout << x << ' ' << y;
}



