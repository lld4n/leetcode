#include <iostream>
#include <vector>
#include <deque>


using namespace std;


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, k;
  cin >> n >> k;
  vector<int> pillars(n + 1, 0);
  for (int i = 2; i < n; ++i) cin >> pillars[i];
  vector<long long> dp(n + 1, 0);
  vector<int> path(n + 1, 0);
  deque<int> deq;

  deq.push_back(1);

  for (int i = 2; i <= n; ++i) {
    while (!deq.empty() && deq.front() < i - k) {
      deq.pop_front();
    }

    dp[i] = dp[deq.front()] + pillars[i];
    path[i] = deq.front();

    while (!deq.empty() && dp[i] >= dp[deq.back()]) {
      deq.pop_back();
    }
    deq.push_back(i);
  }

  cout << dp[n] << endl;

  int i = n;
  vector<int> ans;
  while (i != 0) {
    ans.push_back(i);
    i = path[i];
  }

  cout << ans.size() - 1 << endl;
  for (int q = (int) ans.size() - 1; q >= 0; --q) {
    cout << ans[q] << " ";
  }
  return 0;
}