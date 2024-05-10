#include <iostream>

using namespace std;


typedef long long ll;

ll n, res = 1, ost = 1000000;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  cin >> n;
  for (ll i = 1; i <= n; i++) {
    res *= i;
    while (res % 10 == 0) res /= 10;
    res %= ost;
  }
  cout << res % 10;
  return 0;
}