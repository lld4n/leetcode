#include <iostream>
#include <unordered_map>
#include <vector>
#include <queue>
#include <climits>

using namespace std;

typedef pair<int, int> pii;

int dijkstra(vector<vector<pii>> &graph, int start) {
  int n = graph.size();
  vector<int> dist(n, INT_MAX);
  dist[start] = 0;

  priority_queue<pii, vector<pii>, greater<pii>> pq;
  pq.emplace(0, start);

  while (!pq.empty()) {
    int u = pq.top().second;
    int d = pq.top().first;
    pq.pop();

    if (d > dist[u]) continue;

    for (auto edge: graph[u]) {
      int v = edge.first;
      int w = edge.second;

      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        pq.emplace(dist[v], v);
      }
    }
  }
  int mm = 0;
  for (int i = 1; i < n; i++) {
    if (dist[i] > mm) {
      mm = dist[i];
    }
  }
  return mm;
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n, m;
  cin >> n >> m;


  unordered_map<int, vector<pair<int, int>>> map;
  vector<vector<pii>> graph(n + 1);


  int u, v, w;
  for (int i = 0; i < m; ++i) {
    cin >> u >> v >> w;
    graph[u].emplace_back(v, w);
    graph[v].emplace_back(u, w);
  }

  int ans = 1e9;
  int dist = 1e9;

  for (int i = 1; i <= n; ++i) {
    int b = dijkstra(graph, i);
    if (b < dist) {
      ans = i;
      dist = b;
    } else if (b == dist) {
      if (i < ans) {
        ans = i;
      }
    }
  }

  cout << ans;

  return 0;
}