#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<int> computeLPS(string pattern) {
  int n = pattern.length();
  vector<int> lps(n);
  int len = 0;
  lps[0] = 0;
  int i = 1;
  while (i < n) {
    if (pattern[i] == pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

int countCircularSubstrings(string a, string b) {
  string concat = b + b;
  int m = b.length();
  int n = a.length();
  vector<int> lps = computeLPS(b);
  int i = 0, j = 0;
  int count = 0;
  while (i < 2 * m) {
    if (concat[i] == a[j]) {
      i++;
      j++;
    }
    if (j == n) {
      count++;
      j = lps[j - 1];
    } else if (i < 2 * m && concat[i] != a[j]) {
      if (j != 0)
        j = lps[j - 1];
      else
        i++;
    }
  }
  return count;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string a, b;
  cin >> a >> b;
  cout << countCircularSubstrings(a, b) << endl;
  return 0;
}
