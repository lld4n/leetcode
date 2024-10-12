package _2_10_24

func minGroups(intervals [][]int) int {
	maxVal := 0
	res := 0

	for _, interval := range intervals {
		if interval[1] > maxVal {
			maxVal = interval[1]
		}
	}

	dp := make([]int, maxVal+2)

	for _, interval := range intervals {
		dp[interval[0]] += 1
		dp[interval[1]+1] -= 1
	}

	for i := 1; i < len(dp); i++ {
		dp[i] += dp[i-1]
		if dp[i] > res {
			res = dp[i]
		}
	}

	return res
}
