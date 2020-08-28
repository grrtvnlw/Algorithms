def has_same_digit_frequency(a, b):
  if len(a) != len(b):
    return False

  result = {}

  for num in a:
    if num in result.keys():
      result[num] += 1
    else:
      result[num] = 1

  for num in b:
    try:
      if result[num] == 0:
        print(result)
        return False
      else:
        result[num] -= 1
    except KeyError:
      print(result)
      return False

  print(result)
  return True

print(has_same_digit_frequency([1, 2, 3, 4], [1, 2, 3, 5])) # False
print(has_same_digit_frequency([1, 1, 1, 2, 3], [1, 2, 2, 2, 3])) # False
print(has_same_digit_frequency([1, 2, 3], [3, 2, 1])) # True