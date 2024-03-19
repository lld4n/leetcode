#include <iostream>
#include <string>
#include <vector>

using namespace std;


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string S;
  cin >> S;

  string T = S + S;
  string m = S;
  for (int i = 0; i < S.size(); ++i) {
    string cur = T.substr(i, S.size());
    if (cur < m) {
      m = cur;
    }
  }
  cout << m;
  return 0;
}