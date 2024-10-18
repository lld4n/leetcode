package _9_10_24

func countMaxOrSubsets(nums []int) int {
	target, ans := 0, 0
	for _, num := range nums {
		target |= num
	}

	var backtrack func(int, int)
	backtrack = func(start, cur int) {
		if cur == target {
			ans++
		}
		for i := start; i < len(nums); i++ {
			backtrack(i+1, cur|nums[i])
		}
	}
	backtrack(0, 0)
	return ans
}
