#include <iostream>
#include <string>
#include <vector>

using namespace std;


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  string s;
  cin >> s;
  int n = (int) s.size();
  vector<vector<string>> packed(n, vector<string>(n));
  for (int len = 1; len <= n; len++) {
    for (int left = 0; left + len - 1 < n; left++) {
      int right = left + len - 1;
      string min = s.substr(left, len);
      if (len > 4) {
        for (int right1 = left; right1 < right; right1++) {
          int left2 = right1 + 1;
          string t = packed[left][right1] + packed[left2][right];
          if (t.size() < min.size()) min = t;
        }
        for (int p = 1; p < len; p++) {
          if (len % p == 0) {
            bool isPeriodic = true;
            for (int i = left + p; i <= right; i++) {
              if (s[i] != s[i - p]) {
                isPeriodic = false;
                break;
              }
            }
            if (isPeriodic) {
              string t =
                to_string(len / p) + '(' + packed[left][left + p - 1] + ')';
              if (t.size() < min.size()) min = t;
            }
          }
        }
      }
      packed[left][right] = min;
    }
  }
  cout << packed[0][n - 1];
  return 0;
}