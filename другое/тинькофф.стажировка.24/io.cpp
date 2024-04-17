#include <iostream>
#include <vector>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  vector<char> c(10);
  char q;
  for (int i = 0; i < 10; i++) {
    cin.get(q);
    cout << q;

  }
  for (auto i: c) {
    cout << i << endl;
  }
  return 0;
}