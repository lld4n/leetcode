#include <string>

using namespace std;

class Solution {
public:
  string generateTheString(int n) {
    string ans;
    if (n % 2 == 0) {
      while (n != 1) {
        n--;
        ans += "a";
      }
      ans += "b";
    } else {
      while (n != 0) {
        n--;
        ans += "a";
      }
    }
    return ans;
  }
};