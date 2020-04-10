# need to get input from user (number) and convert to int
inp = int(input("Give me a number: "))

# need to count from 1 to the users input; setup a counter variable
counter = 1
while counter <= inp: 
# need to print formatted output
# need to test if counter is divisible by 3 and 5 and print “fizzbuzz” if it is
# must test this case first or else it won’t execute
	if counter % 3 == 0 and counter % 5 == 0:
		print("fizzbuzz")
# need to test if counter is divisible by 3 and print “fizz” if it is
	elif counter % 3 == 0:
		print("fizz")
# need to test if counter is divisible by 5 and print “buzz” if it is
	elif counter % 5 == 0:
		print("buzz")
# need to print number value of counter variable 
	else:
		print(int(counter))
	counter += 1.  # need to increment counter to the next number