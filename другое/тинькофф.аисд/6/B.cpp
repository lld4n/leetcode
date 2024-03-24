#include <iostream>
#include <unordered_map>
#include <vector>
#include <vector>

using namespace std;


bool dfs(unordered_map<int, vector<int>> &map, int cur, vector<int> visited) {
  bool flag = false;
  for (auto i: visited) {
    if (i == cur) {
      flag = true;
    }
  }
  if (flag) {
    return true;
  }


  if (map.count(cur) == 0) {
    return false;
  }
  visited.push_back(cur);
  vector<int> conn = map[cur];
  for (auto i: conn) {
    bool q = dfs(map, i, visited);
    if (q) return true;
  }
  return false;
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, m;
  cin >> n >> m;

  unordered_map<int, vector<int>> map;

  int s, e;

  for (int i = 0; i < m; ++i) {
    cin >> s >> e;
    if (map.count(s) > 0) {
      map[s].push_back(e);
    } else {
      map[s] = {e};
    }
  }
  bool flag = false;
  for (int i = 1; i < n + 1; ++i) {
    bool c = dfs(map, i, {});
    if (c) {
      flag = true;
      break;
    }
  }

  cout << flag;


  return 0;
}