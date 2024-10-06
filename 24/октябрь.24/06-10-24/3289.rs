use std::collections::HashSet;

impl Solution {
    pub fn get_sneaky_numbers(nums: Vec<i32>) -> Vec<i32> {
        let mut seen = HashSet::new();
        let mut ans = Vec::new();

        for (index, &num) in nums.iter().enumerate() {
            if seen.contains(&num) {
                ans.push(num);
            } else {
                seen.insert(num);
            }
        }

        ans
    }
}