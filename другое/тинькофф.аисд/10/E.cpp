#include <iostream>
#include <vector>
#include <climits>
#include <set>

using namespace std;

int n, m;


vector<long long> dijkstra(vector<vector<pair<int, int>>> &graph) {
  vector<long long> distances(n, LONG_LONG_MAX);
  int start = 0;
  distances[start] = 0;
  set<pair<long long, int>> queue;
  queue.insert({0, start});
  while (!queue.empty()) {
    auto top = queue.begin();
    int u = top->second;
    queue.erase(top);

    for (auto next: graph[u]) {
      int v = next.first;
      int length = next.second;
      if (distances[v] > distances[u] + length) {
        if (queue.find({distances[v], v}) != queue.end()) {
          queue.erase(queue.find({distances[v], v}));
        }

        distances[v] = distances[u] + length;
        queue.insert({distances[v], v});
      }
    }
  }

  return distances;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  cin >> n >> m;

  vector<vector<pair<int, int>>> graph;
  graph.resize(n);

  for (int i = 0; i < m; ++i) {
    int u, v, w;
    cin >> u >> v >> w;
    graph[u - 1].emplace_back(v - 1, w);
    graph[v - 1].emplace_back(u - 1, w);
  }

  vector<long long> res = dijkstra(graph);
  for (long long re: res) {
    cout << re << " ";
  }

  return 0;
}