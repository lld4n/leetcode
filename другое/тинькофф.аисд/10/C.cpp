#include <iostream>
#include <vector>
#include <utility>
#include <algorithm>

using namespace std;

struct edge {
  int start;
  int end;
  int cost;
};

struct DSU {
  vector<int> parents;
  vector<int> sizes;

  explicit DSU(int count) {
    for (int i = 0; i < count; i++) {
      parents.push_back(i);
      sizes.push_back(1);
    }
  }

  int find(int x) {
    if (parents[x] != x) {
      parents[x] = find(parents[x]);
    }
    return parents[x];
  }

  void unon(int x, int y) {
    x = find(x);
    y = find(y);
    if (x == y) return;
    if (sizes[x] > sizes[y]) {
      int b = x;
      x = y;
      y = b;
    }
    parents[x] = y;
    sizes[y] += sizes[x];
  }

  void print() {
    for (auto i: parents) {
      cout << i << " ";
    }
    cout << endl;
  };
};

bool compare(const edge &a, const edge &b) {
  if (a.cost < b.cost) return true;
  if (a.cost > b.cost) return false;
  if (a.start < b.start) return true;
  if (a.start > b.start) return false;
  if (a.end < b.end) return true;
  if (a.end > b.end) return false;
  return true;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n, m;
  cin >> n >> m;
  vector<edge> edges;
  DSU dsu(n * m);
  int value;
  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < m; ++j) {
      int cur = m * i + j;
      cin >> value;
      if (value == 1) {
        int next = m * (i + 1) + j;
        dsu.unon(cur, next);
      } else if (value == 2) {
        int next = m * i + (j + 1);
        dsu.unon(cur, next);
      } else if (value == 3) {
        int next = m * (i + 1) + j;
        dsu.unon(cur, next);
        next = m * i + (j + 1);
        dsu.unon(cur, next);
      }

      if (j != m - 1) {
        int next = m * i + (j + 1);
        edges.push_back({cur, next, 2});
      }
      if (i != n - 1) {
        int next = m * (i + 1) + j;
        edges.push_back({cur, next, 1});
      }
    }
  }
  sort(edges.begin(), edges.end(), compare);

  int ans = 0;
  vector<edge> edges_ans;
  for (auto e: edges) {
    if (dsu.find(e.start) != dsu.find(e.end)) {
      ans += e.cost;
      edges_ans.push_back(e);
      dsu.unon(e.start, e.end);
    }
  }

  cout << edges_ans.size() << " " << ans << endl;
  for (auto e: edges_ans) {
//    cout << e.start << endl;
    int i = e.start / m;
    int j = e.start % m;
    cout << i + 1 << " " << j + 1 << " ";
    if (e.cost == 1) {
      cout << 1 << endl;
    } else {
      cout << 2 << endl;
    }
  }
  return 0;
}