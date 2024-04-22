#include <iostream>
#include <climits>
#include <map>
#include <utility>
#include <vector>
#include <algorithm>

using namespace std;


typedef vector<pair<int, int>> vpii;

long long result = LLONG_MAX;
long long maximum = 1000000000000000;

bool dijkstra(vector<vpii> &edges, int start, int a, int b, int c) {
  vector<long long> dist(edges.size(), maximum);
  map<int, long long> queue;
  dist[start] = 0;
  queue[start] = 0;
  while (!queue.empty()) {
    pair<int, long long> extracted = *(queue.begin());
    queue.erase(queue.begin());
    for (auto const &item: edges[extracted.first]) {
      if (dist[item.first] > extracted.second + item.second) {
        dist[item.first] = extracted.second + item.second;
        queue[item.first] = dist[item.first];
      }
    }
  }
  if (dist[a] >= maximum || dist[b] >= maximum || dist[c] >= maximum) {
    return false;
  } else {
    result = min(result, dist[a] + dist[b] + dist[c]);
    return true;
  }
}

int main() noexcept {
  int n, m, a, b, c;
  cin >> n >> m;
  vector<vpii> edges(n, vpii());
  int u, v, w;
  for (int i = 0; i < m; i++) {
    cin >> u >> v >> w;
    edges[u - 1].emplace_back(v - 1, w);
    edges[v - 1].emplace_back(u - 1, w);
  }
  cin >> a >> b >> c;
  a--;
  b--;
  c--;
  if (!dijkstra(edges, a, a, b, c)) {
    cout << -1;
  } else {
    dijkstra(edges, b, a, b, c);
    dijkstra(edges, c, a, b, c);
    cout << result;
  }
  return 0;
}