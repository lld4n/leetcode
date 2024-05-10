#include <iostream>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int i, j, m;
  cin >> m;
  bool a[m];
  for (i = 2; i < m; ++i) {
    a[i] = true;
  }
  for (i = 2; i * i < m; ++i) {
    if (a[i]) {
      for (j = i + i; j < m; j += i) {
        a[j] = false;
      }
    }
  }
  i = 2;
  while (!(a[i] && a[m - i])) {
    i++;
  }
  cout << i << ' ' << m - i;
  return 0;
}

