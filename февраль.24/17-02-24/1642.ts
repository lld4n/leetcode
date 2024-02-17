class MaxHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  insert(value: number) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index: number) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  extractMax(): number | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.sinkDown(0);
    return max;
  }

  sinkDown(index: number) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.sinkDown(largest);
    }
  }
  getSize(): number {
    return this.heap.length;
  }
}

function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number,
): number {
  const heap = new MaxHeap();
  let list: number[] = [];
  let i = 0;
  for (i = 0; i < heights.length - 1; i++) {
    if (heights[i] < heights[i + 1]) {
      const need = heights[i + 1] - heights[i];
      if (need <= bricks) {
        bricks -= need;
        heap.insert(need);
      } else if (ladders > 0) {
        if (heap.getSize() > 0) {
          const lst = heap.extractMax()!;
          if (lst >= need) {
            bricks += lst;
            i--;
          } else {
            heap.insert(lst);
          }
        }

        ladders--;
      } else {
        break;
      }
    }
  }
  return i;
}
