#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  int n;
  cin >> n;
  vector<short> arr(n);
  for (int i = 0; i < n; ++i) cin >> arr[i];

  int two_count = 0;
  int three_count = 0;
  int five_count = 0;

  if (n <= 7) {
    cout << -1;
    return 0;
  }
  int ans = -1;
  for (int i = 0; i < 7; ++i) {
    if (arr[i] == 2) two_count++;
    else if (arr[i] == 3) three_count++;
    else if (arr[i] == 5) five_count++;
  }
  if (two_count == 0 && three_count == 0) {
    ans = max(five_count, ans);
  }
  for (int i = 7; i < n; ++i) {
    if (arr[i] == 2) two_count++;
    else if (arr[i] == 3) three_count++;
    else if (arr[i] == 5) five_count++;

    if (arr[i - 7] == 2) two_count--;
    else if (arr[i - 7] == 3) three_count--;
    else if (arr[i - 7] == 5) five_count--;

    if (two_count == 0 && three_count == 0) {
      ans = max(five_count, ans);
    }
  }

  cout << ans;

  return 0;
}