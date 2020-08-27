inp = input('Give me a string: ')

def most_characters(str):
  most_char = 0
  char = ''
  result = {}

  for char in str:
    if char in result.keys():
      result[char] += 1
    else:
      result[char] = 1

  for key, value in result.items():
    if value > most_char:
      most_char = value
      char = key

  return f'{char}: {most_char}'

print(most_characters(inp))