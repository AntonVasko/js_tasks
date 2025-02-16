s = input()
a = s.find('h')
z = s.rfind('h')
new = s[a+1: z]
print(new)
print(s.replace(new, new.replace('h', 'H')))