package _5_10_24

func minimumSteps(s string) int64 {
	left := 0
	var res int64 = 0

	for right := range len(s) {
		if s[right] == '0' {
			res += int64(right - left)
			left += 1
		}

	}
	return res
}
