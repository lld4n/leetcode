#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

struct item {
  int value;
  int parent;
  int count;
  int maximum;
  int minimum;
};

int find(vector<item> &arr, int x) {
  if (arr[x].parent != x) {
    arr[x].parent = find(arr, arr[x].parent);
  }
  return arr[x].parent;
}

void unon(vector<item> &arr, int x, int y) {
  x = find(arr, x);
  y = find(arr, y);
  if (x == y) return;
  if (arr[x].count > arr[y].count) {
    int b = x;
    x = y;
    y = b;
  }
  arr[x].parent = y;
  arr[y].count += arr[x].count;
  arr[y].maximum = max(arr[y].maximum, arr[x].maximum);
  arr[y].minimum = min(arr[y].minimum, arr[x].minimum);
}

void print(vector<item> &arr) {
  for (auto i: arr) {
    cout << i.value << "-" << i.parent << "-" << i.count << " ";
  }
  cout << endl;
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  int n, m;
  cin >> n >> m;
  vector<item> arr;
  arr.reserve(n + 1);
  for (int i = 0; i < n + 1; ++i) {
    arr.push_back({i, i, 1, i, i});
  }
  string type;
  int x, y;
  for (int i = 0; i < m; ++i) {
//    print(arr);
    cin >> type;
    if (type == "union") {
      cin >> x >> y;
      unon(arr, x, y);
    } else {
      cin >> x;
      int cur = find(arr, x);
      cout << arr[cur].minimum << " " << arr[cur].maximum << " "
           << arr[cur].count << endl;
    }
//    print(arr);
  }
  return 0;
}