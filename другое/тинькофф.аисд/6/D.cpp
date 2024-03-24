#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

typedef pair<int, int> Type;

const pair<int, int> change[] = {
  {-1, -2},
  {1,  -2},
  {-2, -1},
  {2,  -1},
  {-2, 1},
  {2,  1},
  {-1, 2},
  {1,  2}
};

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  Type start;
  cin >> start.first >> start.second;

  Type end;
  cin >> end.first >> end.second;


  queue<Type> q;
  map<Type, Type> visited;
  q.push(start);

  visited[start] = {-1, -1};
  while (!q.empty()) {
    Type cur = q.front();
    q.pop();

    if (cur == end) {
      break;
    }

    for (auto &move: change) {
      Type new_cur = {cur.first + move.first, cur.second + move.second};

      if (new_cur.first > 0 && new_cur.first <= n && new_cur.second > 0 &&
          new_cur.second <= n && visited.find(new_cur) == visited.end()) {
        q.push(new_cur);
        visited[new_cur] = cur;
      }
    }

  }
  Type cur = end;
  vector<Type> path;

  while (cur.first != -1 && cur.second != -1) {
    path.emplace_back(cur);
    cur = visited[cur];
  }

  cout << path.size() - 1 << endl;
  for (auto it = path.rbegin(); it != path.rend(); ++it) {
    cout << it->first << ' ' << it->second << endl;
  }

  return 0;
}