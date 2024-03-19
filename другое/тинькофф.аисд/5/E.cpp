#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool is(string &s, string &p, int i, int lp) {
  int si = i;
  int pi = 0;
  int c = 0;
  while (pi != lp) {
    if (s[si] != p[pi]) {
      c++;
    }
    si++;
    pi++;

    if (c > 2) {
      return false;
    }
  }

  return c <= 1;
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string p;
  cin >> p;

  string s;
  cin >> s;
  int ls = static_cast<int>(s.size());
  int lp = static_cast<int>(p.size());
  vector<int> ans;

  for (int i = 0; i < ls - lp + 1; ++i) {
    if (is(s, p, i, lp)) {
      ans.push_back(i);
    }
  }

  cout << ans.size() << endl;
  for (int i: ans) {
    cout << i + 1 << " ";
  }


  return 0;
}