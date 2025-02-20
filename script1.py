n, a, b, c, d = map(int, input().split())

numbers = list(range(1, n + 1))
numbers[a-1:b] = numbers[a-1:b][::-1]
numbers[c-1:d] = numbers[c-1:d][::-1]
print(*numbers)
