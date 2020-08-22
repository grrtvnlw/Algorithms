def charCount(inp):
  result = {}
  inp = inp.lower()

  for n in inp:
    if n.isalpha():
      if n in result.keys():
        result[n] += 1
      else:
        result[n] = 1

  return result

print(charCount('Hi there!'))