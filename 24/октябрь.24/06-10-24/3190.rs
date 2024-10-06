impl Solution {
    pub fn minimum_operations(nums: Vec<i32>) -> i32 {
        let mut ans = 0;

        for num in nums {
            let x = num % 3;

            if (x == 1) {
                ans += 1;
            } else if (x == 2) {
                ans += 1;
            }
        }

        return ans
    }
}
