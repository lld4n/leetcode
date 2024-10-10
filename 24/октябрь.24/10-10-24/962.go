package _0_10_24

func maxWidthRamp(nums []int) int {
	var stack []int
	var maxWidth int
	for i := len(nums) - 1; i >= 0; i-- {
		if len(stack) == 0 || nums[i] > nums[stack[len(stack)-1]] {
			stack = append(stack, i)
		} else {
			for j := len(stack) - 1; j >= 0 && nums[i] <= nums[stack[j]]; j-- {
				maxWidth = max(maxWidth, stack[j]-i)
			}
		}
	}
	return maxWidth
}
