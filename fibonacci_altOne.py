# given an input, print out Fibonacci sequence
# get input from user 
inp = int(input("What Fibonacci numbers would you like to see? "))

# create counter and number variables / need 2 number variables 
num_one = 0
num_two = 1
num_three = 0 # make the third number the first number plus the second number


# counts the iterations of the loop from zero to input
while num_three <= inp:
    print(num_three) # print the first number
    num_three = num_one + num_two # make the third number the first number plus the second number
    num_one = num_two # make the first number equal the second number
    num_two = num_three # make the second number equal the third number