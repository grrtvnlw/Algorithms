def has_same_digit_frequency(a, b):
    if len(a) != len(b):
        return False
    else:
        a.sort(), b.sort()
        if a != b:
            return False
        else: 
            return True

print(has_same_digit_frequency([1, 2, 3, 4], [1, 2, 3, 5])) # False
print(has_same_digit_frequency([1, 1, 1, 2, 3], [1, 2, 3])) # False
print(has_same_digit_frequency([1, 2, 3], [3, 2, 1])) # True