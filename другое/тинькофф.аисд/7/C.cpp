#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, k;
  cin >> n >> k;
  vector<int> pillars(n + 1, 0);

  for (int i = 2; i < n; ++i) {
    cin >> pillars[i];
  }

  vector<int> dp(n + 1, 0);
  vector<int> monet(n + 1, 0);


  int nmax;

  for (int i = 2; i <= n; ++i) {
    nmax = i - 1;
    int mx = max(i - k, 1);
    cout << mx << " " << i << endl;
    nmax = *max_element(dp.begin() + mx, dp.begin() + i);
    monet[i] = nmax;
    dp[i] = dp[nmax] + pillars[i];
//    for (int j = mx; j < i; j++) {
//      if (dp[nmax] < dp[j]) nmax = j;
//    }

  }


  int c = 0;
  int num = n;

  vector<int> j;

  j.emplace_back(num);

  while (num > 1) {
    num = monet[num];
    j.emplace_back(num);
    c++;
  }

  cout << dp[n] << endl;
  cout << c << endl;
  for (int i = (int) j.size() - 1; i >= 0; --i) {
    cout << j[i] << " ";
  }

  return 0;
}