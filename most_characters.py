def most_characters(str):
    letter_count = {}
    for letter in str:
        if letter_count.get(letter, False):
            letter_count[letter] += letter_count[letter] + 1
        else:
            letter_count[letter] = 1

    counter = 0
    for value in letter_count.values():
        if value > counter:
            counter = value
    
    most = ''
    for key in letter_count:
        if letter_count[key] == counter:
            most += key
    return most

print(most_characters("abcda"))
print(most_characters("rahrahrah"))