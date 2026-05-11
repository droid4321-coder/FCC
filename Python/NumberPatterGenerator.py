# Take a sequence of numbbera and display them in sequence

def number_pattern(n):
    i = n
    l = []
    for num in range(i):
        l.append(str(num))
    
    return l

print(number_pattern(10))