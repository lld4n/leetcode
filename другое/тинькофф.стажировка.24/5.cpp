#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

struct Type {
  int f;
  int s;
  int t;

  int mx() {
    if (f > s) return max(f, t);
    else return max(s, t);
  }
};

inline int r(string &t, int i) {
  if (t[i] == 'W') return -1;
  else if (t[i] == 'C') return 1;
  else return 0;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;

  vector<Type> arr(n + 1);
  arr[0] = {0, 0, 0};

  string tr;

  for (int i = 1; i <= n; ++i) {
    cin >> tr;
    arr[i] = {r(tr, 0), r(tr, 1), r(tr, 2)};
  }
  int ans = 0;
  for (int i = 1; i <= n; ++i) {

    if (arr[i].f != -1) {
      if (arr[i - 1].f != -1 || arr[i - 1].s != -1) {
        arr[i].f += max(arr[i - 1].f, arr[i - 1].s);
        ans = i;
      }
    }

    if (arr[i].s != -1) {
      if (arr[i - 1].f != -1 || arr[i - 1].s != -1 || arr[i - 1].t != -1) {
        arr[i].s += arr[i - 1].mx();
        ans = i;
      }
    }

    if (arr[i].t != -1) {
      if (arr[i - 1].s != -1 || arr[i - 1].t != -1) {
        arr[i].t += max(arr[i - 1].s, arr[i - 1].t);
        ans = i;
      }
    }

    if (ans != i) {
      cout << arr[ans].mx();
      return 0;
    }

  }

  cout << arr[ans].mx();
  return 0;
}