package _9_10_24

type NeighborSum struct {
	grid [][]int
	lenx int
	leny int
}

func Constructor(grid [][]int) NeighborSum {
	return NeighborSum{grid: grid, lenx: len(grid), leny: len(grid[0])}
}

func (this *NeighborSum) AdjacentSum(value int) int {
	return this.neighborSum(value, false)
}

func (this *NeighborSum) DiagonalSum(value int) int {
	return this.neighborSum(value, true)
}

func (this *NeighborSum) neighborSum(value int, diagonal bool) int {
	directions := [][2]int{
		{1, 0},  // вниз
		{-1, 0}, // вверх
		{0, 1},  // вправо
		{0, -1}, // влево
	}

	if diagonal {
		directions = [][2]int{
			{1, 1},
			{-1, -1},
			{-1, 1},
			{1, -1},
		}
	}

	ans := 0
	var xx, yy int
	found := false

	for x := range this.grid {
		for y, ey := range this.grid[x] {
			if ey == value {
				xx = x
				yy = y
				found = true
				break
			}
		}
		if found {
			break
		}
	}

	for _, dir := range directions {
		nx, ny := xx+dir[0], yy+dir[1]
		if nx >= 0 && nx < this.lenx && ny >= 0 && ny < this.leny {
			ans += this.grid[nx][ny]
		}
	}

	return ans
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * obj := Constructor(grid);
 * param_1 := obj.AdjacentSum(value);
 * param_2 := obj.DiagonalSum(value);
 */
