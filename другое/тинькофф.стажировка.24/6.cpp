#include <iostream>
#include <vector>
#include <string>
#include <deque>
#include <unordered_set>
#include <utility>
#include <algorithm>
#include <climits>

using namespace std;

typedef vector<vector<int>> vvi;
typedef pair<int, int> pi;
pi start;

vector<pi> horse_move = {{-2, -1},
                         {-2, 1},
                         {-1, 2},
                         {1,  2},
                         {2,  1},
                         {2,  -1},
                         {-1, -2},
                         {1,  -2}};

vector<pi> crown_move = {{-1, -1},
                         {-1, 0},
                         {-1, 1},
                         {0,  -1},
                         {0,  1},
                         {1,  -1},
                         {1,  0},
                         {1,  1}};

unordered_set<string> visited_horse;
unordered_set<string> visited_crown;
struct qi {
  pi cord;
  bool horse;
  int depth;
};

inline string vis(const pi &cord) {
  return to_string(cord.first) + "_" + to_string(cord.second);
}

inline bool check(int n, pi &cord) {
  if (cord.first < 0 || cord.first >= n || cord.second < 0 ||
      cord.second >= n) {
    return false;
  } else {
    return true;
  }
}


inline void rep(string &line, vvi &arr, int index) {
  for (int j = 0; j < (int) line.size(); ++j) {
    if (line[j] == 'S') {
      start = {index, j};
      arr[index][j] = 1;
    } else if (line[j] == 'F') arr[index][j] = 2;
    else if (line[j] == 'K') arr[index][j] = 3;
    else if (line[j] == 'G') arr[index][j] = 4;
    else arr[index][j] = 0;
  }
}

inline void cro(deque<qi> &q, int n, qi top) {
  for (auto move: crown_move) {
    auto buffer = top;
    buffer.cord.first += move.first;
    buffer.cord.second += move.second;
    if (check(n, buffer.cord) &&
        visited_crown.find(vis(buffer.cord)) == visited_crown.end()) {
      visited_crown.insert(vis(buffer.cord));
      buffer.horse = false;
      buffer.depth++;
      q.push_back(buffer);
    }
  }
}

inline void hor(deque<qi> &q, int n, qi top) {
  for (auto move: horse_move) {
    auto buffer = top;
    buffer.cord.first += move.first;
    buffer.cord.second += move.second;
    if (check(n, buffer.cord) &&
        visited_horse.find(vis(buffer.cord)) == visited_horse.end()) {
      visited_horse.insert(vis(buffer.cord));
      buffer.horse = true;
      buffer.depth++;
      q.push_back(buffer);
    }
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n;
  cin >> n;
  vvi arr(n, vector<int>(n, 0));

  string line;
  for (int i = 0; i < n; ++i) {
    cin >> line;
    rep(line, arr, i);
  }


  deque<qi> q;
  q.push_back({start, true, 0});
  visited_horse.insert(vis(start));
  while (!q.empty()) {
    auto top = q.front();
    q.pop_front();
    auto cord = top.cord;
    if (arr[cord.first][cord.second] == 2) {
      cout << top.depth;
      return 0;
    } else if (arr[cord.first][cord.second] == 3) {
      hor(q, n, top);
    } else if (arr[cord.first][cord.second] == 4) {
      cro(q, n, top);
    } else {
      if (top.horse) {
        hor(q, n, top);
      } else {
        cro(q, n, top);
      }
    }
  }

  cout << -1;

  return 0;
}