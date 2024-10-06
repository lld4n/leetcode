class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int i = 0;
        int ans = 0;
        while (numBottles > 0) {
            numBottles--;
            ans++;
            i++;
            if (i == numExchange) {
                i = 0;
                numBottles++;
            }
        }
        return ans;
    }
};