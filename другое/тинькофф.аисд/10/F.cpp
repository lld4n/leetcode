#include <iostream>
#include <vector>
#include <array>
#include <queue>
#include <set>

using namespace std;
int n, m;
vector<vector<array<int, 3>>> graph;

int dij(int cups) {
  vector<bool> used(n + 1);
  priority_queue<pair<int, int>> q;
  q.emplace(0, -1);
  while (!q.empty()) {
    auto cur = q.top();
    q.pop();
    int curTime = -cur.first;
    int from = -cur.second;
    used[from] = true;
    if (curTime > 1440) return 0;
    if (from == n) return curTime;

    for (auto road: graph[from]) {
      if (road[2] >= cups && !used[road[0]]) {
        int tmp = curTime + road[1];
        if (tmp <= 1440) {
          q.emplace(-tmp, -road[0]);
        }
      }
    }

  }
  return 0;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  cin >> n >> m;
  graph.resize(n + 1);
  if (n == 1) {
    cout << 10000000 << endl;
    return 0;
  }

  set<int> unique;
  int from, to, time, weight;
  for (int i = 0; i < m; ++i) {
    cin >> from >> to >> time >> weight;
    int cups = (weight - 3000000) / 100;
    if (cups <= 0) {
      continue;
    }
    graph[from].push_back({to, time, cups});
    graph[to].push_back({from, time, cups});
    unique.insert(cups);
  }
  vector<int> uniquev;
  for (auto cups: unique) {
    uniquev.push_back(cups);
  }


  int l = 0;
  int r = unique.size() - 1;
  int maximumCups = 0;
  while (l <= r) {
    int m = (l + r) / 2;
    int minTime = dij(uniquev[m]);

    if (minTime == 0) {
      r = m - 1;
    } else {
      l = m + 1;

      if (uniquev[m] > maximumCups) {
        maximumCups = uniquev[m];
      }
    }
  }

  cout << maximumCups << endl;
  return 0;
}