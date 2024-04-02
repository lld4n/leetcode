n = int(input())
a = list(map(int, input().split()))
l = sorted(set(a))


def transform_list(lst):
    result = []
    start = lst[0]
    end = lst[0]
    for i in range(1, len(lst)):
        if lst[i] == end + 1:
            end = lst[i]
        else:
            if end - start >= 2:
                result.append(str(start) + " ... " + str(end))
            else:
                result.extend([str(x) for x in range(start, end + 1)])
            start = lst[i]
            end = lst[i]
    if end - start >= 2:
        result.append(str(start) + " ... " + str(end))
    else:
        result.extend([str(x) for x in range(start, end + 1)])
    return " ".join(result)


print(transform_list(l))
