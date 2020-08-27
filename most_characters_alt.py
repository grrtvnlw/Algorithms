inp = input('Give me a string: ')

def most_characters(str):
  if len(str) == 0:
    return 'Empty String'
    
  letter_count = 0
  letter = ''
  result = {}

  for char in str:
    if char in result.keys():
      result[char] += 1
    else:
      result[char] = 1

  # for key, value in result.items():
  #   if value > letter_count:
  #     letter_count = value
  #     letter = key

  for value in result.values():
    if value > letter_count:
      letter_count = value

  for key in result.keys():
    if result[key] == letter_count:
      print(f'{key}: {result[key]}')

  # return f'{letter}: {letter_count}'

most_characters(inp)