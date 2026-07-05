def validate_isbn(isbn, length):
    if len(isbn, length) != length:
        print(f'ISBN-{length} code should be {length} digits long.')
        return
    main_digits = isbn[0:length]
    given_check_digit = isbn[length]
    main_digits_list = [int(digit) for digit in main_digits]
    # Calculate the check digit from other digits
    if length == 10:
        expected_check_digit = calculate_check_digit_10(main_digits_list)
    else:
        expected_check_digit = calculate_check_digit_13(main_digits_list)
    # Check if the given check digit matches with the calculated check digit
    if given_check_digit == expected_check_digit:
        print('Valid ISBN Code.')
    else:
        print('Invalid ISBN Code.')
def calculate_check_digit_10(main_digits_list):
    # Note: You don't have to fully understand the logic in this function.
    digits_sum = 0
    # Multiply each of the first 9 digits by its corresponding weight (10 to 2) and sum up the results
    for index, digit in enumerate(main_digits_list):
        digits_sum += digit * (10 - index)
    # Find the remainder of dividing the sum by 11, then subtract it from 11
    result = 11 - digits_sum % 11
    # The calculation result can range from 1 to 11.
    # If the result is 11, use 0.
    # If the result is 10, use upper case X.
    # Use the value as it is for other numbers.
    if result == 11:
        expected_check_digit = '0'
    elif result == 10:
        expected_check_digit = 'X'
    else:
        expected_check_digit = str(result)
    return expected_check_digit
def calculate_check_digit_13(main_digits_list):
    # Note: You don't have to fully understand the logic in this function.
    digits_sum = 0
    # Multiply each of the first 12 digits by 1 and 3 alternately (starting with 1), and sum up the results
    for index, digit in enumerate(main_digits_list):
        if index % 2 == 0:
            digits_sum += digit * 1
        else:
            digits_sum += digit * 3
    # Find the remainder of dividing the sum by 10, then subtract it from 10
    result = 10 - digits_sum % 10
    # The calculation result can range from 1 to 10.
    # If the result is 10, use 0.
    # Use the value as it is for other numbers.
    if result == 10:
        expected_check_digit = '0'
    else:
        expected_check_digit = str(result)
    return expected_check_digit
def main():

    #US2 and US3
    user_input = input('Enter ISBN and length: ')
    if "," not in user_input:
        print("Enter comma-separated values.")
        return


    values = user_input.split(',')
    print(values)

    isbn = values[0]

    #US6 - in progress

    #if ISBN is 10 digits long:
    #1. Split first 9 digits and last digit (needed to verify for X)
    #2. Check if first 9 digits are not integers or if last digit is not a number and not equal to X(Check!)
    if len(isbn) == 10:
        isbn_chk1 = isbn[:9]
        print(isbn_chk1)
        isbn_chk2 = isbn[9:]
        print(isbn_chk2)

        if not isinstance(isbn_chk1, int) or (not isinstance(isbn_chk2, int) and isbn_chk2 != "X"):
            print("Invalid character was found.")
            return

    #If ISBN is 13 digits and it is not an integer, return invalid character found message.
    if len(isbn) == 13 and not isinstance(isbn, int):
        print("Invalid character was found.")
        return

    
    #US4 and US5 - in progress, returns error :( (Sheesh, forgot the dot lol. Fixed now) (Also, put an edge case fix here for the X in 10 digit ISBN codes)(Needs fix!)
    length = values[1]
    print(length, type(length))
    if not isinstance(length, int) and isbn[9] != "X":
        print("Length must be a number.")
        return

    #US1 - US = User Story
    if length == 10 or length == 13:
        validate_isbn(isbn, length)
    else:
        print('Length should be 10 or 13.')

#main()