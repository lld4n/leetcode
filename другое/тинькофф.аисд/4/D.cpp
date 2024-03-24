#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  long long k;
  cin >> n >> k;

  long long l = 0, r = LLONG_MAX / 2, m;

  while (l + 1 < r) {
    m = (l + r) / 2;

    int i = 1, j = n;
    long long c = 0;
    while (i <= n && j > 0) {
      if ((long long) i * j < m) {
        c += j;
        i++;
      } else {
        j--;
      }
    }

    if (c < k) {
      l = m;
    } else {
      r = m;
    }
  }

  cout << l;

  return 0;
}