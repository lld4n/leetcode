#include <iostream>
#include <vector>

using namespace std;
vector<int> f;

int p(int i) {
  return 0;
}

int sum(int r) {
  int i = r - 1;
  int res = 0;
  while (i >= 0) {
    res += f[i];
    i = p(i) - 1;
  }
  return res;
}

void inc(int i, int v) {
  int j = i;
  while (j < f.size()) {
    f[j] += v;
    j = j | (j + 1);
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 0;
}