class Graph {
  N: number;
  edges: number[][];
  constructor(n: number, edges: number[][]) {
    this.N = n;
    this.edges = edges;
  }

  addEdge(edge: number[]): void {
    this.edges.push(edge);
  }

  shortestPath(node1: number, node2: number): number {
    const N = this.N;
    const dist: number[] = new Array(N).fill(Infinity);
    dist[node1] = 0;
    for (let i = 0; i < N; i++) {
      for (const [a, b, w] of this.edges) {
        dist[b] = Math.min(dist[a] + w, dist[b]);
      }
    }
    if (dist[node2] === Infinity) {
      return -1;
    }
    return dist[node2];
  }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
