#include <iostream>
#include <unordered_map>
#include <vector>
#include <algorithm>

using namespace std;


void
dfs(unordered_map<int, vector<int>> &m, vector<bool> &make, int cur,
    vector<int> &comp) {
  comp.push_back(cur);
  make[cur] = true;
  if (m.count(cur) > 0) {
    vector<int> conn = m[cur];
    for (auto i: conn) {
      if (!make[i]) {
        dfs(m, make, i, comp);
      }
    }
  }


}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, m;
  cin >> n >> m;
  vector<bool> make(n + 1, false);

  unordered_map<int, vector<int>> map;

  int f, s;
  for (int i = 0; i < m; ++i) {
    cin >> f >> s;
    if (map.count(f) > 0) {
      map[f].push_back(s);
    } else {
      map[f] = {s};
    }
    if (map.count(s) > 0) {
      map[s].push_back(f);
    } else {
      map[s] = {f};
    }
  }

  vector<vector<int>> ans;

  for (int i = 1; i < make.size(); ++i) {
    if (!make[i]) {
      vector<int> b;
      dfs(map, make, i, b);
      ans.push_back(b);
    }
  }
  cout << ans.size() << endl;

  for (auto q: ans) {
    sort(q.begin(), q.end());
    cout << q.size() << endl;
    for (auto i: q) {
      cout << i << " ";
    }
    cout << endl;
  }


  return 0;
}