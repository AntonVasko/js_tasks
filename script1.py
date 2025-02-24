n = int(input())
a = list(map(int, input().split()))
k = 0
for i in range(0, len(a)):
    for t in range(i+1, len(a)):
        if a[i] > a[t]:
            k += 1
print(k)
