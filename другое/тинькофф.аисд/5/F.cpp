#include <iostream>
#include <string>
#include <vector>

using namespace std;


long long count(string &s) {
  string str = "#";
  for (char c: s) {
    str += c;
    str += "#";
  }

  int n = static_cast<int>(str.length());
  vector<int> d1(n);
  for (int i = 0, l = 0, r = -1; i < n; i++) {
    int k = (i > r) ? 1 : min(d1[l + r - i], r - i + 1);
    while (0 <= i - k && i + k < n && str[i - k] == str[i + k]) {
      k++;
    }
    d1[i] = k--;
    if (i + k > r) {
      l = i - k;
      r = i + k;
    }
  }

  long long count = 0;
  for (int i = 0; i < n; i++) {
    count += d1[i] / 2;
  }

  return count;
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string S;
  cin >> S;
  long long ans = count(S);

  cout << ans;
  return 0;
}

