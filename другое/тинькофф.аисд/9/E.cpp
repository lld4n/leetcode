#include <iostream>
#include <vector>
#include <set>
#include <map>
#include <algorithm>
#include <numeric>

#define int long long
using namespace std;

struct segment_tree {
  int n;
  vector<int> mn;
  vector<int> mn_len;
  vector<int> add;

  segment_tree(vector<int> &dist) {
    n = dist.size();
    mn.resize(4 * n, 0);
    mn_len.resize(4 * n, 0);
    add.resize(4 * n, 0);
    build(1, 0, n, dist);
  }

  void build(int v, int l, int r, vector<int> &dist) {
    if (l + 1 == r) {
      mn_len[v] = dist[l];
    } else {
      int m = (l + r) / 2;
      build(2 * v, l, m, dist);
      build(2 * v + 1, m, r, dist);
      mn_len[v] = mn_len[2 * v] + mn_len[2 * v + 1];
    }
  }

  void push(int v) {
    add[2 * v] += add[v];
    mn[2 * v] += add[v];
    add[2 * v + 1] += add[v];
    mn[2 * v + 1] += add[v];
    add[v] = 0;
  }

  void update(int v, int l, int r, int lx, int rx, int val) {
    if (r <= lx || rx <= l) {
      return;
    }
    if (lx <= l && r <= rx) {
      add[v] += val;
      mn[v] += val;
      return;
    }

    push(v);
    int m = (l + r) / 2;
    update(2 * v, l, m, lx, rx, val);
    update(2 * v + 1, m, r, lx, rx, val);

    if (mn[2 * v] == mn[2 * v + 1]) {
      mn[v] = mn[2 * v];
      mn_len[v] = mn_len[2 * v] + mn_len[2 * v + 1];
    } else if (mn[2 * v] < mn[2 * v + 1]) {
      mn[v] = mn[2 * v];
      mn_len[v] = mn_len[2 * v];
    } else {
      mn[v] = mn[2 * v + 1];
      mn_len[v] = mn_len[2 * v + 1];
    }
  }

  void update(int lx, int rx, int val) {
    update(1, 0, n, lx, rx, val);
  }

  int query() {
    return (mn[1] ? 0 : mn_len[1]);
  }
};

struct event {
  int x;
  int y1;
  int y2;
  int type;

  bool operator<(const event &other) const {
    return make_pair(x, -type) < make_pair(other.x, -other.type);
  }
};

int32_t main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  vector<event> events(2 * n);
  set<int> yyy;
  int x1, y1, x2, y2;
  for (int i = 0; i < n; ++i) {
    cin >> x1 >> y1 >> x2 >> y2;
    if (x1 > x2 || y1 > y2) {
      swap(x1, x2);
      swap(y1, y2);
    }
    x2++;
    y2++;
    yyy.insert(y1);
    yyy.insert(y2);
    events[2 * i] = {x1, y1, y2, 1};
    events[2 * i + 1] = {x2, y1, y2, -1};
  }
  sort(events.begin(), events.end());

  vector<int> sorted_yyy;
  sorted_yyy.reserve(yyy.size());
  for (int i: yyy) {
    sorted_yyy.push_back(i);
  }

  map<int, int> y_coord_index;
  for (int i = 0; i < sorted_yyy.size(); ++i) {
    y_coord_index[sorted_yyy[i]] = i;
  }

  vector<int> dist(sorted_yyy.size() - 1);
  for (int i = 1; i < sorted_yyy.size(); ++i) {
    dist[i - 1] = sorted_yyy[i] - sorted_yyy[i - 1];
  }
  int sum_dist = accumulate(dist.begin(), dist.end(), 0);

  segment_tree seg_tree(dist);

  int ans = 0;
  int prev_x = events[0].x;
  for (event i: events) {
    ans += (sum_dist - seg_tree.query()) * (i.x - prev_x);
    seg_tree.update(y_coord_index[i.y1], y_coord_index[i.y2], i.type);
    prev_x = i.x;
  }
  cout << ans;

  return 0;
}