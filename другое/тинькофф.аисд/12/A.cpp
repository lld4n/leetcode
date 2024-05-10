#include <iostream>

using namespace std;

int gcd(int a, int b) {
  while (a && b)
    if (a >= b)
      a %= b;
    else
      b %= a;
  return a | b;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int N, K;
  cin >> N >> K;
  cout << (N / gcd(N, K)) * K << endl;
  return 0;
}