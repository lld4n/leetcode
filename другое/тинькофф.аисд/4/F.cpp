#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(const pair<int, int> &a, const pair<int, int> &b)
{
  if (a.first != b.first)
  {
    return a.first < b.first;
  }
  else
  {
    return a.second < b.second;
  }
}

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  //    cin >> n;
  //    cout << prefix_sum[r] - prefix_sum[l - 1] << endl;

  int n;
  cin >> n;

  vector<pair<int, int>> arr(n);
  int l, r;
  for (int i = 0; i < n; ++i)
  {
    cin >> l >> r;
    arr[i] = pair(l, r);
  }

  sort(arr.begin(), arr.end(), compare);

  int start = arr[0].first;
  int c = 0;

  for (int i = 0; i < n; ++i)
  {
    if (arr[i].first > start)
    {
      c += (arr[i].second - arr[i].first);
      start = arr[i].second;
    }
    else if (arr[i].second > start)
    {
      c += (arr[i].second - start);
      start = arr[i].second;
    }
  }

  cout << c;

  return 0;
}