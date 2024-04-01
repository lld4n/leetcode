#include <iostream>
#include <vector>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  vector<int> lst(n + 1, 0);

  for (int i = 1; i < n + 1; ++i) {
    cin >> lst[i];
  }

  vector<int> dp(n + 1, 0);
  vector<int> prev(n + 1, -1);

  for (int i = 1; i < n + 1; ++i) {
    dp[i] = 1;
    for (int j = 1; j < i; ++j) {
      if (lst[i] > lst[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }
  int pos = 0;
  int len = dp[0];
  for (int i = 1; i < n + 1; ++i) {
    if (dp[i] > len) {
      pos = i;
      len = dp[i];
    }
  }
  cout << len << endl;

  vector<int> answer;
  while (pos != -1) {
    answer.push_back(lst[pos]);
    pos = prev[pos];
  }

  for (int i = answer.size() - 1; i >= 0; --i) {
    cout << answer[i] << " ";
  }

  return 0;
}