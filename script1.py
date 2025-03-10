nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


def encode(num, x):
    ans = 0
    num = num[::-1]
    for i in range(len(num)):
        el = num[i]
        if el not in nums:
            el = ord(el) - 55
        ans += int(el)*(x**i)
    return ans


with open('input.txt') as f:
    string = f.read().rstrip('\n')
    string = string.replace('+', ' ')
    string = string.replace('=', ' ')
    stringl = string.split()
    string = string.replace(' ', '')
    string = list(string)
    for i in range(len(string)):
        string[i] = encode(string[i], 10)
    for i in range(1, 37):
        if max(string) >= i:
            continue
        num1 = encode(stringl[0], i)
        num2 = encode(stringl[1], i)
        num3 = encode(stringl[2], i)
        if num1 + num2 == num3:
            print(i)
            quit()
    print(-1)
