#include <iostream>

using namespace std;

const int MOD = 1e9 + 7;

unsigned long long factorial(int n) {
  if (n == 0) {
    return 1;
  }
  unsigned long long result = 1;
  for (int i = 1; i <= n; i++) {
    result = (result * i) % MOD;
  }
  return result;
}

unsigned long long binomialCoefficient(int n, int k) {
  if (n < k) {
    return 0;
  }
  unsigned long long numerator = factorial(n);
  unsigned long long denominator = (factorial(k) * factorial(n - k)) % MOD;
  unsigned long long denominatorInverse = 1;
  unsigned long long base = denominator;
  int power = MOD - 2;
  while (power > 0) {
    if (power % 2 == 1) {
      denominatorInverse = (denominatorInverse * base) % MOD;
    }
    base = (base * base) % MOD;
    power /= 2;
  }
  return (numerator * denominatorInverse) % MOD;
}

int main() {
  int n, k;
  cin >> n >> k;
  cout << binomialCoefficient(n, k);
  return 0;
}