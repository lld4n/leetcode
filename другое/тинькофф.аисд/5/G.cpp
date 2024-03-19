#include <iostream>
#include <random>
#include <map>

using namespace std;

unsigned long long h() {
  random_device rd;
  mt19937 rng(rd());
  uniform_int_distribution<mt19937::result_type> hash(1U,
                                                      numeric_limits<unsigned>::max());
  return hash(rng);
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  map<unsigned long long, unsigned long long> mapp;
  unsigned long long val;

  int n;
  cin >> n;

  vector<unsigned long long> f(n + 1, 0);

  for (int i = 1; i <= n; ++i) {
    cin >> val;
    if (mapp.find(val) == mapp.end()) {
      mapp[val] = h();
    }
    f[i] = f[i - 1] + mapp[val];
  }

  int m;
  cin >> m;
  vector<unsigned long long> s(m + 1, 0);

  for (int i = 1; i <= m; ++i) {
    cin >> val;
    if (mapp.find(val) == mapp.end()) {
      mapp[val] = h();
    }
    s[i] = s[i - 1] + mapp[val];
  }


  int mm = m > n ? n : m;


  while (mm > 0) {
    for (int i = 0; i < n - mm + 1; ++i) {
      for (int j = 0; j < m - mm + 1; ++j) {
        if (f[n - i] - f[n - mm - i] == s[m - j] - s[m - mm - j]) {
          cout << mm;
          return 0;
        }
      }
    }
    --mm;
  }

  cout << mm;

  return 0;
}

