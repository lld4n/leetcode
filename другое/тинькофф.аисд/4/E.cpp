#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int check(vector<int> &a, long long summ) {
  int parts = 0;
  long long cur_summ = 0;

  for (int i: a) {
    if (cur_summ + i > summ) {
      cur_summ = 0;
      ++parts;
    }
    if (i > summ) {
      return INT_MAX;
    }
    cur_summ += i;
  }
  if (cur_summ)
    ++parts;

  return parts;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  //    cin >> n;
  //    cout << prefix_sum[r] - prefix_sum[l - 1] << endl;

  int n, k;
  cin >> n >> k;

  vector<int> arr(n);
  for (int i = 0; i < n; ++i) {
    cin >> arr[i];
  }

  long long l = LLONG_MAX / 2, r = -1, m;
  while (l - r > 1) {

    m = (r + l) / 2;
    if (check(arr, m) <= k) {
      l = m;
    } else {
      r = m;
    }
  }

  cout << l;

  return 0;
}