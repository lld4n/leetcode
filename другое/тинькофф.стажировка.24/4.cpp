#include <iostream>
#include <string>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n;
  cin >> n;
  string dir;
  cin >> dir;

  int q;
  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < n; ++j) {
      cin >> q;
    }
  }
  if (n == 1) {
    cout << 0;
    return 0;
  }

  if (dir == "R") {
    cout << n * n << endl;
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < n; ++j) {
        cout << i << " " << j << " " << n - j - 1 << " " << i << endl;
      }
    }
    return 0;
  }

  if (dir == "L") {
    cout << n * n << endl;
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < n; ++j) {
        cout << i << " " << j << " " << j << " " << n - i - 1 << endl;
      }
    }
    return 0;
  }

  return 0;
}