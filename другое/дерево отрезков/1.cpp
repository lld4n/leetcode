#include <vector>

using namespace std;

vector<int> arr;
vector<int> prefix;

void build() {
  prefix.push_back(0);
  int b = 0;
  for (int i: arr) {
    b += i;
    prefix.push_back(b);
  }
}

int sum(int l, int r) {
  return prefix[r] - prefix[l];
}

void set(int i, int v) {
  arr[i] = v;
  for (int j = i + 1; j < prefix.size(); ++j) {
    prefix[j] = prefix[j - 1] + arr[j];
  }
}

int main() {
  return 0;
}