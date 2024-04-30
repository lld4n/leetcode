#include <iostream>
#include <string>

using namespace std;

string max1(string a, string b) {
  if (a.length() >= b.length()) return a;
  return b;
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string s;
  cin >> s;
  int L = (int) s.length();
  string d[101][101];
  for (int i = 0; i < L; i++)
    d[i][i] = s[i];
  for (int i = 1; i < L; i++) {
    for (int j = i; j < L; j++) {
      int g = j - i;
      if (s[g] != s[j]) {
        d[g][j] = max1(d[g][j - 1], d[g + 1][j]);
      } else {
        d[g][j] = max1(d[g][j - 1],
                       max1(d[g + 1][j], s[g] + d[g + 1][j - 1] + s[j]));
      }
    }
  }

  cout << d[0][L - 1].length() << endl << d[0][L - 1] << endl;;

}