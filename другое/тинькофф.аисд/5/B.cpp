#include <iostream>
#include <string>
#include <vector>

using namespace std;


vector<int> prefix(string pattern, int must) {
  vector<int> prefix(pattern.size(), 0);
  vector<int> ans;
  for (int i = 1; i < pattern.size(); ++i) {
    int j = prefix[i - 1];
    while (j > 0 && pattern[i] != pattern[j]) {
      j = prefix[j - 1];
    }
    if (pattern[i] == pattern[j]) {
      j++;
    }
    if (j == must) {
      ans.push_back(i);
    }
    prefix[i] = j;
  }


  return ans;
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string T;
  cin >> T;

  int m;
  cin >> m;

  string S;
  for (int i = 0; i < m; ++i) {
    cin >> S;
    vector<int> ans = prefix(S + "#" + T,
                             static_cast<int>(S.size()));
    int div;
    if (S.size() == 1) {
      div = 2;
    } else {
      div = 2 * static_cast<int>(S.length());
    }
    cout << ans.size() << " ";
    for (int q: ans) {
      cout << q - div << " ";
    }
    cout << "\n";
  }

  return 0;
}