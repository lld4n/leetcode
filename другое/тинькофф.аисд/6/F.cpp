#include <iostream>
#include <unordered_map>
#include <vector>
#include <queue>
#include <string>
#include <unordered_set>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int m;
  cin >> m;

  unordered_map<string, vector<string>> graph;
  string f, _, s;
  for (int i = 0; i < m; ++i) {
    cin >> f >> _ >> s;
    graph[f].push_back(s);
  }

  string start, end;
  cin >> start >> end;

  // BFS
  unordered_set<string> visited;
  queue<pair<string, int>> q;
  q.push({start, 0});
  visited.insert(start);
  int min_path_length = -1;

  while (!q.empty()) {
    auto t = q.front();
    q.pop();

    if (t.first == end) {
      min_path_length = t.second;
      break;
    }

    for (const auto &neighbor: graph[t.first]) {
      if (visited.find(neighbor) == visited.end()) {
        q.push({neighbor, t.second + 1});
        visited.insert(neighbor);
      }
    }
  }

  cout << min_path_length << endl;

  return 0;
}
