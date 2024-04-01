#include <iostream>
#include <string>
#include <vector>

using namespace std;

string res;

void ans
  (
    int left,
    int right,
    vector<vector<int>> &dp,
    vector<vector<int>> &pos,
    string &s
  ) {
  if (dp[left][right] == right - left + 1) return;
  if (dp[left][right] == 0) {
    res.append(s.substr(left, right - left + 1));
    return;
  }
  if (pos[left][right] == -10) {
    res.push_back(s[left]);
    ans(left + 1, right - 1, dp, pos, s);
    res.push_back(s[right]);
    return;
  }
  ans(left, pos[left][right], dp, pos, s);
  ans(pos[left][right] + 1, right, dp, pos, s);
}


void print(vector<vector<int>> &m) {
  for (auto &i: m) {
    for (int j: i) {
      cout << j << "|";
    }
    cout << endl;
  }
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);


  string s;
  cin >> s;

  int n = (int) s.size();
  if (n == 0) {
    cout << "";
    return 0;
  }


  vector<vector<int>> dp(n, vector<int>(n));
  vector<vector<int>> pos(n, vector<int>(n));


  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < n; ++j) {
      dp[i][j] = 0;
      if (i == j) dp[i][j] = 1;
    }
  }

  for (int right = 0; right < n; ++right) {
    for (int left = right; left >= 0; --left) {
      if (left == right) {
        dp[left][right] = 1;
      } else {
        int min = 100000;
        int mink = -10;
        if (s[left] == '(' && s[right] == ')') min = dp[left + 1][right - 1];
        if (s[left] == '[' && s[right] == ']') min = dp[left + 1][right - 1];
        if (s[left] == '{' && s[right] == '}') min = dp[left + 1][right - 1];
        for (int k = left; k < right; k++) {
          if (min > dp[left][k] + dp[k + 1][right]) {
            min = dp[left][k] + dp[k + 1][right];
            mink = k;
          }
        }
        dp[left][right] = min;
        pos[left][right] = mink;
      }
    }
  }
  ans(0, n - 1, dp, pos, s);
  cout << res;

  return 0;
}