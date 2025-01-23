def encode(n, base):
    res = ''
    while n != 0:
        d = n%base
        n = n//base
        if d >= 10:
            d = chr(ord('A') + d-10)
            res += str(d)
        else:
            res += str(d)
    return res[::-1]


def decode(n, base):
    res = 0
    n = n[::-1]
    d = 0
    for i in range(len(n)):
        try:
            d = int(n[i])
        except:
            d = ord(n[i])-55
        res += (base**i) * d
    return res

'''
print(encode(30, 2))
print(decode("11110", 2))
print(encode(30, 16))
print(decode("1E", 16))
'''

def to_mem(num, byte):
    if num < 0:
        m = encode(i%(2**(byte*8)), 16)
    else:
        m = encode(i, 16)
    while len(m) > 2*byte:
        m = m[::-1][:-1][::-1]
    while len(m) < 2*byte:
        m = (m[::-1]+'0')[::-1]
    return m

def to_unsignd(h):
    return decode(h, 16)

def to_signed(num, byte):
    num = to_unsignd(to_mem(num, byte))
    if num >= 2**(byte*8-1):
        return (num - 2**(byte*8))
    else:
        return num
        

        

w = 16
for i in ('x', 'M1', 'U1', 'S1', 'M2', 'U2', 'S2', 'M4', 'U4', 'S4'):
    print(f"{i:>{w}}", end = '')
print()
for i in (-100, -1000, -157, -73, -20, -101, -1, -15):
    m1 = to_mem(i, 1)
    u1 = to_unsignd(m1)
    s1 = to_signed(i, 1)
    m2 = to_mem(i, 2)
    u2 = to_unsignd(m2)
    s2 = to_signed(i, 2)
    m4 = to_mem(i, 4)
    u4 = to_unsignd(m4)
    s4 = to_signed(i, 4)
    
    print(f"{i:>{w}}{m1:>{w}}{u1:>{w}}{s1:>{w}}{m2:>{w}}{u2:>{w}}{s2:>{w}}{m4:>{w}}{u4:>{w}}{s4:>{w}}")