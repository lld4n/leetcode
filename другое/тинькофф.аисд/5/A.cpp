#include <iostream>
#include <string>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);


  string T;
  cin >> T;
  int m;
  cin >> m;
  int a, b, c, d;
  for (int i = 0; i < m; ++i) {
    cin >> a >> b >> c >> d;
    if (T.substr(a - 1, b - a + 1) == T.substr(c - 1, d - c + 1)) {
      cout << "Yes" << endl;
    } else {
      cout << "No" << endl;
    }
  }
  return 0;
}
