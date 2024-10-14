package _4_10_24

import "math"

// MaxHeap представляет собой структуру максимальной кучи
type MaxHeap struct {
	elements []int
}

// NewMaxHeap создает новый экземпляр MaxHeap
func NewMaxHeap() *MaxHeap {
	return &MaxHeap{
		elements: []int{},
	}
}

// Insert добавляет элемент в кучу
func (h *MaxHeap) Insert(value int) {
	h.elements = append(h.elements, value)
	h.bubbleUp(len(h.elements) - 1)
}

// ExtractMax извлекает максимальный элемент из кучи
func (h *MaxHeap) ExtractMax() (int, bool) {
	if len(h.elements) == 0 {
		return 0, false // Куча пуста
	}
	m := h.elements[0]
	lastIndex := len(h.elements) - 1
	h.elements[0] = h.elements[lastIndex] // Перемещаем последний элемент на корень
	h.elements = h.elements[:lastIndex]   // Удаляем последний элемент
	h.bubbleDown(0)                       // Восстанавливаем кучу
	return m, true
}

// bubbleUp восстанавливает свойства кучи, поднимая элемент вверх
func (h *MaxHeap) bubbleUp(index int) {
	for index > 0 {
		parentIndex := (index - 1) / 2
		if h.elements[index] <= h.elements[parentIndex] {
			break
		}
		h.elements[index], h.elements[parentIndex] = h.elements[parentIndex], h.elements[index]
		index = parentIndex
	}
}

// bubbleDown восстанавливает свойства кучи, опуская элемент вниз
func (h *MaxHeap) bubbleDown(index int) {
	lastIndex := len(h.elements) - 1
	for index <= lastIndex {
		leftChild := 2*index + 1
		rightChild := 2*index + 2
		largest := index

		if leftChild <= lastIndex && h.elements[leftChild] > h.elements[largest] {
			largest = leftChild
		}
		if rightChild <= lastIndex && h.elements[rightChild] > h.elements[largest] {
			largest = rightChild
		}
		if largest == index {
			break
		}
		h.elements[index], h.elements[largest] = h.elements[largest], h.elements[index]
		index = largest
	}
}

func maxKelements(nums []int, k int) int64 {
	h := NewMaxHeap()
	var ans int64
	ans = 0

	for _, elem := range nums {
		h.Insert(elem)
	}

	for i := 0; i < k; i++ {
		x, _ := h.ExtractMax()
		ans += int64(x)
		h.Insert(int(math.Ceil(float64(x) / 3)))
	}

	return ans
}
