#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

void primeFactors(int n) {
  vector<pair<int, int>> factors;
  int q = 0;
  while (n % 2 == 0) {
    n = n / 2;
    q++;
  }
  if (q > 0) {
    factors.emplace_back(2, q);
  }

  for (int i = 3; i <= sqrt(n); i = i + 2) {
    while (n % i == 0) {
      n = n / i;
      if (!factors.empty() && factors.back().first == i) {
        factors.back().second++;
      } else {
        factors.emplace_back(i, 1);
      }
    }
  }

  if (n > 2) {
    factors.emplace_back(n, 1);
  }

  for (size_t i = 0; i < factors.size(); ++i) {
    if (factors[i].second > 1) {
      cout << factors[i].first << "^" << factors[i].second;
    } else {
      cout << factors[i].first;
    }
    if (i != factors.size() - 1) {
      cout << "*";
    }
  }
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n;
  cin >> n;
  primeFactors(n);
  return 0;
}