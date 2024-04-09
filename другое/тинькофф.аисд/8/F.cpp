#include<iostream>
#include<queue>
#include<algorithm>

using namespace std;

pair<int, int> arr[100001];
int idx[100001];
long long tree[100001];
int n;

inline long long get(int i) {
  long long ans = 0;
  for (; i; i -= i & -i) {
    ans += tree[i];
  }
  return ans;
}

inline void up(int i) {
  for (; i <= n; i += i & -i) {
    ++tree[i];
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);

  cin >> n;
  for (int i = 1; i <= n; ++i) {
    cin >> arr[i].first, arr[i].second = i;
  }

  sort(arr + 1, arr + 1 + n, greater<pair<int, int>>());

  for (int i = 1; i <= n; ++i) {
    idx[arr[i].second] = i;
  }

  long long ans = 0;
  long long temp;
  for (int i = 1; i <= n; ++i) {
    temp = get(idx[i]);
    ans += temp * (n - i - idx[i] + temp + 1);
    up(idx[i]);
  }
  cout << ans;
}
