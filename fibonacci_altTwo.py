def Fibonacci():
    inp = int(input("Give me a number: "))
    a, b = 0, 1
    while a < inp:
        print(a)
        a, b = b, a + b

Fibonacci()