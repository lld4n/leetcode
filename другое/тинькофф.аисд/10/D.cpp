#include <iostream>
#include <vector>
#include <array>
#include <numeric>
#include <set>

using namespace std;


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;
  vector<array<int, 2>> arr(n);
  for (int i = 0; i < n; i++) cin >> arr[i][0];
  for (int i = 0; i < n; i++) cin >> arr[i][1];

  vector<int> prev(n), next(n);
  iota(prev.begin(), prev.end(), -1);
  iota(next.begin(), next.end(), 1);
  next[n - 1] = -1;

  vector<int> died(n, -1);
  set<int> life;
  for (int i = 0; i < n; i++) life.insert(i);

  for (int k = 0; k < n; k++) {
    set<int> die;
    for (auto i: life) {
      long long attack = 0;
      if (prev[i] != -1) attack += arr[prev[i]][0];
      if (next[i] != -1) attack += arr[next[i]][0];
      if (attack > arr[i][1]) die.insert(i);
    }
    life.clear();

    cout << die.size() << " ";

    for (auto x: die) {
      if (prev[x] != -1) {
        next[prev[x]] = next[x];
        if (die.find(prev[x]) == die.end()) life.insert(prev[x]);
      }
      if (next[x] != -1) {
        prev[next[x]] = prev[x];
        if (die.find(next[x]) == die.end()) life.insert(next[x]);
      }
    }
  }
  return 0;
}