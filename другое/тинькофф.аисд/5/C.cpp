#include <algorithm>
#include <vector>
#include <random>
#include <chrono>
#include <string>
#include <iostream>

typedef unsigned long long ull;
using namespace std;

int gen_base(const int before, const int after) {
  auto seed = chrono::high_resolution_clock::now().time_since_epoch().count();
  mt19937 mt_rand(seed);
  int base = uniform_int_distribution<int>(before + 1, after)(mt_rand);
  return base % 2 == 0 ? base - 1 : base;
}

struct PolyHash {
  static const int mod = (int) 1e9 + 123;
  static vector<int> pow1;
  static vector<ull> pow2;
  static int base;

  static inline int diff(int a, int b) {
    return (a -= b) < 0 ? a + mod : a;
  }

  vector<int> pref1;
  vector<ull> pref2;

  PolyHash(const string &s)
    : pref1(s.size() + 1u, 0), pref2(s.size() + 1u, 0) {
    const int n = s.size();
    while ((int) pow1.size() <= n) {
      pow1.push_back(1LL * pow1.back() * base % mod);
      pow2.push_back(pow2.back() * base);
    }
    for (int i = 0; i < n; ++i) {
      pref1[i + 1] = (pref1[i] + 1LL * s[i] * pow1[i]) % mod;
      pref2[i + 1] = pref2[i] + s[i] * pow2[i];
    }
  }

  inline pair<int, ull>
  operator()(const int pos, const int len, const int mxPow = 0) const {
    int hash1 = pref1[pos + len] - pref1[pos];
    ull hash2 = pref2[pos + len] - pref2[pos];
    if (hash1 < 0) hash1 += mod;
    if (mxPow != 0) {
      hash1 = 1LL * hash1 * pow1[mxPow - (pos + len - 1)] % mod;
      hash2 *= pow2[mxPow - (pos + len - 1)];
    }
    return make_pair(hash1, hash2);
  }
};

int PolyHash::base((int) 1e9 + 7);
vector<int> PolyHash::pow1{1};
vector<ull> PolyHash::pow2{1};

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  string a, b;
  cin >> a >> b;


  const int mxPow = max((int) a.size(), (int) b.size() * 2);

  PolyHash::base = gen_base(256, PolyHash::mod);

  PolyHash hash_a(a), hash_b(b + b);

  vector<pair<int, ull>> hashes;
  for (int i = 0; i < (int) b.size(); ++i) {
    hashes.push_back(hash_b(i, b.size(), mxPow));
  }
  sort(hashes.begin(), hashes.end());

  int answ = 0;
  for (int i = 0; i + (int) b.size() <= (int) a.size(); ++i) {
    answ += binary_search(hashes.begin(), hashes.end(),
                          hash_a(i, b.size(), mxPow));
  }

  cout << answ;

  return 0;
}