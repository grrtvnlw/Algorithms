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
        return False
      else:
        result[num] -= 1
    except KeyError:
      return False

  return True