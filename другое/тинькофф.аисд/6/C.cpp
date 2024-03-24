#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, m;
  cin >> n >> m;

  unordered_map<int, vector<int>> map;
  for (int i = 1; i < n + 1; ++i) {
    map[i] = {};
  }


  int s, e;

  for (int i = 0; i < m; ++i) {
    cin >> s >> e;
    map[s].push_back(e);
  }

  vector<int> sor(n);
  for (int i = 0; i < n; ++i) {
    cin >> sor[i];
  }

  bool ans = true;
  for (int i = 0; i < n; ++i) {
    if (!ans) break;
    auto buffer = map[sor[i]];
    for (auto f: buffer) {
      bool flag = false;
      for (int j = i + 1; j < n; ++j) {
        if (sor[j] == f) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        ans = false;
        break;
      }
    }
  }

  if (ans) {
    cout << "YES";
  } else {
    cout << "NO";
  }

  return 0;
}