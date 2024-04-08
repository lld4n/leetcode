import math
import sys


def greedy_grasshopper(n, m, lst):
    lst.append(0)
    max_coins_list = [0 for _ in range(n)]
    prev_bump_list = [0 for _ in range(n)]
    for ind_bump in range(1, n):
        prev_max_coins = -math.inf
        prev_max_ind = -1
        for prev_step in range(1, m + 1):
            prev_ind = ind_bump - prev_step
            if prev_ind >= 0:
                if max_coins_list[prev_ind] > prev_max_coins:
                    prev_max_coins = max_coins_list[prev_ind]
                    prev_max_ind = prev_ind
            else:
                break
        max_coins_list[ind_bump] = prev_max_coins + lst[ind_bump - 1]
        prev_bump_list[ind_bump] = prev_max_ind
    len_route, route = extract_route(prev_bump_list)
    return max_coins_list, len_route, route


def extract_route(prev_bump_list):
    reversed_route = [len(prev_bump_list)]
    this_bump = prev_bump_list[-1]
    while not this_bump == 0:
        reversed_route.append(this_bump + 1)
        this_bump = prev_bump_list[this_bump]
    reversed_route.append(1)
    return len(reversed_route) - 1, reversed(reversed_route)


n, m = map(int, sys.stdin.readline().split())
lst = list(map(int, sys.stdin.readline().split()))
max_coins, n_steps, route = greedy_grasshopper(n, m, lst)

sys.stdout.write(str(max_coins[-1]) + '\n')
sys.stdout.write(str(n_steps) + '\n')
for q in route:
    sys.stdout.write(str(q) + " ")
# print(*route)
