#include <iostream>
#include <vector>
#include <climits>

using namespace std;


pair<vector<int>, long long>
mm(vector<pair<vector<int>, long long>> &dp, int &k) {
  int i = (int) dp.size() - 1;
  int c = 1;
  pair<vector<int>, long long> ans = {{}, LONG_LONG_MIN};
  while (i >= 0 && c <= k) {
    if (dp[i].second >= ans.second) {
      ans = dp[i];
    }
    c++;
    i--;
  }
  return ans;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, k;
  cin >> n >> k;
  vector<int> pillars(n, 0);

  for (int i = 1; i < n - 1; ++i) {
    cin >> pillars[i];
  }


  vector<pair<vector<int>, long long>> dp;
  dp.push_back({{1}, 0});


  for (int i = 1; i < n; ++i) {
    pair<vector<int>, long long> m = mm(dp, k);
    vector<int> newVector = m.first;
    newVector.push_back(i + 1);
    dp.emplace_back(newVector, m.second + pillars[i]);
  }

  pair<vector<int>, long long> ans = dp.back();
  cout << ans.second << endl;
  cout << ans.first.size() - 1 << endl;
  for (auto q: ans.first) {
    cout << q << " ";
  }

  return 0;
}