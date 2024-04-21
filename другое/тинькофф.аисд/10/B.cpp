#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct vertex {
  int value;
  int parent;
  int count;
};

struct edge {
  int s;
  int e;
  int w;


  bool operator<(const edge &other) const {
    return w < other.w;
  }
};

int find(vector<vertex> &arr, int x) {
  if (arr[x].parent != x) {
    arr[x].parent = find(arr, arr[x].parent);
  }
  return arr[x].parent;
}

void unon(vector<vertex> &arr, int x, int y) {
  x = find(arr, x);
  y = find(arr, y);
  if (x == y) return;
  if (arr[x].count > arr[y].count) {
    int b = x;
    x = y;
    y = b;
  }
  arr[x].parent = y;
  arr[y].count += arr[x].count;
}


void print(vector<vertex> &v, vector<edge> &arr) {
  for (auto i: v) {
    cout << i.value << "-" << i.parent << "-" << i.count << " ";
  }
  cout << endl;
  for (auto i: arr) {
    cout << i.s << "-" << i.e << "-" << i.w << " ";
  }
  cout << endl;
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n, m;
  cin >> n >> m;

  vector<vertex> vertexes;
  vertexes.reserve(n + 1);
  for (int i = 0; i < n + 1; ++i) {
    vertexes.push_back({i, i, 1});
  }

  vector<edge> edges;
  int s, e, w;
  for (int i = 0; i < m; ++i) {
    cin >> s >> e >> w;
    edges.push_back({s, e, w});
  }

  sort(edges.begin(), edges.end());
  long long cost = 0;
  for (auto ed: edges) {
    if (find(vertexes, ed.s) != find(vertexes, ed.e)) {
      cost += ed.w;
      unon(vertexes, ed.s, ed.e);
    }
  }
  cout << cost;

  return 0;
}