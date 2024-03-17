#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string T;
  cin >> T;

  int m;
  cin >> m;

  string S;
  for (int i = 0; i < m; ++i) {
    cin >> S;
    if (S == T) {
      cout << 1 << " " << 0;
    } else {
      vector<int> ans;
      for (int j = 0; j <= T.size() - S.size(); ++j) {
        if (T.substr(j, S.size()) == S) {
          ans.push_back(j);
        }
      }
      cout << ans.size() << " ";
      for (int q: ans) {
        cout << q << " ";
      }
      cout << "\n";
    }
  }

  return 0;
}