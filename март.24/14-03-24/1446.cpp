#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    int maxPower(string s) {
        char ch = s[0];
        int ans = 1;
        int c = 1;
        for (int i = 1; i < s.size(); ++i) {
            if (s[i] != ch) {
                ans = max(c, ans);
                ch = s[i];
                c = 0;
            }
            c++;
        }
        if (c > ans) return c;
        return ans;
    }
};