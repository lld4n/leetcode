package _1_10_24

import "sort"

type queue struct {
	chair, left int
}

type time struct {
	arr, left, index int
}

func smallestChair(times [][]int, targetFriend int) int {

	var tiimes []time
	var chairs []int
	var friends []queue

	for index, elem := range times {
		tiimes = append(tiimes, time{elem[0], elem[1], index})
		chairs = append(chairs, index)
	}

	sort.Slice(tiimes, func(i, j int) bool {
		return tiimes[i].arr < tiimes[j].arr
	})

	for _, elem := range tiimes {
		for i := 0; i < len(friends); i++ {
			e := friends[i]
			e.left--

			if e.left == 0 {
				var lefter queue
				friends, lefter = pop(friends, i)
				chairs = append(chairs, lefter.chair)
				i--
			}
		}

		last := chairs[len(chairs)-1]
		chairs = chairs[:len(chairs)-1]
		friends = append(friends, queue{last, elem.left - elem.arr})

		if elem.index == targetFriend {
			return last
		}
	}

	return 0

}

func pop(arr []queue, index int) ([]queue, queue) {
	var ans queue
	ans = arr[index]
	return append(arr[:index], arr[index+1:]...), ans
}
