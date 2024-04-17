#include <iostream>
#include <unordered_map>
#include <set>
#include <string>
#include <vector>

using namespace std;

string ans;

inline string spaces(int depth) {
  string res;
  while (depth > 0) {
    res += "  ";
    depth--;
  }
  return res;
}

void print(unordered_map<string, set<string>> &map, string &cur, int depth) {
  auto buffer = map[cur];
  ans += spaces(depth);
  for (auto s: cur) {
    if (s == '_') {
      break;
    } else {
      ans += s;
    }
  }
  ans += "\n";
  for (auto q: buffer) {
    print(map, q, depth + 1);
  }
}

inline string add(const string &t, int d) {
  return t + "_" + to_string(d);
}

inline vector<string> split(const string &t) {
  vector<string> tokens;
  string token;

  for (char c: t) {
    if (c == '/') {
      tokens.push_back(token);
      token.clear();
    } else {
      token += c;
    }
  }
  if (!token.empty()) {
    tokens.push_back(token);
  }
  return tokens;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;
  unordered_map<string, set<string>> map;
  map.reserve(n);
  string start;
  string line;
  for (int i = 0; i < n; ++i) {
    cin >> line;
    vector<string> buffer = split(line);
    if (start.empty()) {
      start = add(buffer[0], 0);
    }
    int l = (int) buffer.size();
    for (int j = 0; j < l - 1; ++j) {
      if (map.find(add(buffer[j], j)) == map.end()) {
        map[add(buffer[j], j)] = {add(buffer[j + 1], j + 1)};
      } else {
        map[add(buffer[j], j)].insert(add(buffer[j + 1], j + 1));
      }
    }
    if (map.find(add(buffer[l - 1], l - 1)) == map.end()) {
      map[add(buffer[l - 1], l - 1)] = {};
    }
  }

  print(map, start, 0);
  cout << ans;

  return 0;
}