package _9_10_24

func minAddToMakeValid(s string) int {
	stack := make([]rune, 0)
	res := 0

	for _, char := range s {
		if char == '(' {
			stack = append(stack, char)
		} else if char == ')' {
			if len(stack) != 0 {
				stack = stack[:len(stack)-1]
			} else {
				res += 1
			}
		}
	}
	return res + len(stack)
}
