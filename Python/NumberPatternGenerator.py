def number_pattern(n):
    arr = []

    if not isinstance(n, int):
        return "Argument must be an integer value."

    if n <= 0:
        return "Argument must be an integer greater than 0."

    for num in range(n):
        arr.append(str(num + 1) + "")

    result = " ". join(map(str, arr))
    
    return result

print(number_pattern(133769420))