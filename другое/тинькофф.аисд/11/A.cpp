#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;
const int MAX = 200001;
const int LOGMAX = 20;

int n, l;
vector<int> g[MAX];
int tin[MAX], tout[MAX];
int timer;
int up[MAX][LOGMAX];

void dfs(int v, int p = 1) {
  int to, i;
  tin[v] = timer++;
  up[v][0] = p;

  for (i = 1; i <= l; ++i)
    up[v][i] = up[up[v][i - 1]][i - 1];

  for (i = 0; i < g[v].size(); ++i) {
    to = g[v][i];
    if (to != p)
      dfs(to, v);
  }
  tout[v] = timer++;
}

bool upper(int a, int b) {
  return tin[a] <= tin[b] && tout[a] >= tout[b];
}

int lca(int a, int b) {
  if (upper(a, b)) return a;

  if (upper(b, a)) return b;

  for (int i = l; i >= 0; --i)
    if (!upper(up[a][i], b))
      a = up[a][i];

  return up[a][0];
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int m;
  cin >> n;

  l = 1;
  while ((1 << l) <= n)
    ++l;

  for (int i = 2; i < n + 1; i++) {
    int x;
    cin >> x;
    g[x + 1].push_back(i);
  }
  dfs(1);
  cin >> m;
  for (int i = 0; i < m; i++) {
    int u, v;
    cin >> u >> v;

    int res = lca(u + 1, v + 1);
    cout << res - 1 << endl;
  };

  return 0;


}