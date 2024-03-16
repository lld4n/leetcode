// The API isBadVersion is defined for you.
// bool isBadVersion(int version);
using namespace std;

bool isBadVersion(int version) {
  return version;
}

class Solution {
public:
  int firstBadVersion(int n) {
    int l = 1;
    int r = n;
    while (l < r) {
      long long m = ((long long) l + r) / 2;
      if (isBadVersion(m)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return l;
  }

};


