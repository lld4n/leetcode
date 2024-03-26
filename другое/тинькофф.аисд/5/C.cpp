#include <iostream>
#include <string>
#include <vector>

const int p = 31; // простое число p
const int m = 1e9 + 9; // модуль для вычисления хэша

std::vector<long long> computeHash(const std::string& s) {
  int n = s.length();
  std::vector<long long> hash(n + 1, 0);
  hash[0] = 0;
  for (int i = 0; i < n; ++i) {
    hash[i + 1] = (hash[i] * p + (s[i] - 'a' + 1)) % m;
  }
  return hash;
}

long long substringHash(const std::vector<long long>& hash, int left, int right) {
  return (hash[right + 1] - hash[left] + m) % m;
}

int main() {
  std::string s = "abcabc";
  std::vector<long long> hash = computeHash(s);

  int left = 3; // начало подстроки
  int right = 6; // конец подстроки

  long long hashValue = substringHash(hash, 0, right);

  std::cout << "Хэш подстроки от " << left << " до " << right << ": " << hashValue << std::endl;

  return 0;
}