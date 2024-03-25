#include <iostream>
#include <vector>
#include <queue>
#include <limits>

using namespace std;

typedef unsigned u;
typedef pair<u, u> pu;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  unsigned k;
  cin >> k;
  vector<vector<pu>> graph(k);
  for (unsigned i = 0U; i < k; ++i) {
    graph[i % k].emplace_back((i + 1U) % k, 1U);
  }

  for (unsigned i = 0U; i < k; ++i) {
    graph[i % k].emplace_back((i * 10U) % k, 0U);
  }

  priority_queue<
    pu,
    vector<pu>,
    greater<pu>
  > h;

  vector<unsigned> dist(k, numeric_limits<unsigned>::max());
  h.emplace(1U, 0U);
  dist[1U] = 0U;
  while (!h.empty()) {
    int current = h.top().first;
    h.pop();

    for (const auto &out: graph[current]) {
      if (dist[out.first] > dist[current] + out.second) {
        dist[out.first] = dist[current] + out.second;
        h.emplace(out.first, dist[out.first]);
      }
    }
  }

  cout << 1U + dist[0U];

  return 0;
}