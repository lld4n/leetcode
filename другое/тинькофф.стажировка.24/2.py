import sys

n, m = map(int, sys.stdin.readline().split())
matrix = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

for j in range(m):
    for i in range(n-1, -1, -1):
        sys.stdout.write(str(matrix[i][j]) + " ")
    sys.stdout.write("\n")