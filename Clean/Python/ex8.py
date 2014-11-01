#exercise 8
#fromater is a string
formatter = "%r %r %r %r"

#prints out string of formatting variables,
# after the % the variables that will print to screen
print formatter % (1, 2, 3, 4)
print formatter % ("one", "two", "three", "four")
print formatter % (True, False, False, True)
print formatter % (formatter, formatter, formatter, formatter)
print formatter % (
	"I had this thing.", 
	"That you could type up right.", 
	"But it didn't sing.", 
	"So i said goodnight."
	)