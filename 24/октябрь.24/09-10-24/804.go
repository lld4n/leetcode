package _9_10_24

func uniqueMorseRepresentations(words []string) int {
	morse := []string{".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."}

	var set []string

	for _, elem := range words {
		str := ""
		for _, letter := range elem {
			order := int(letter) % int('a')

			str += morse[order]
		}

		if !contains(set, str) {
			set = append(set, str)
		}

	}

	return len(set)
}

func contains(set []string, value string) bool {
	for _, elem := range set {
		if elem == value {
			return true
		}
	}

	return false
}
