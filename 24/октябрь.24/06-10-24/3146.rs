impl Solution {
    pub fn find_permutation_difference(s: String, t: String) -> i32 {
        let mut ans = 0;

        for (fi, fc) in s.chars().enumerate() {
            for (si, sc) in t.chars().enumerate() {
                if (fc == sc) {
                    ans += (fi as isize - si as isize).abs();
                }
            }
        }

        return ans as i32;
    }
}
