#Example 11 - Asking Questions
print "How old are you?",
age = int(raw_input())
print "How tall are you?",
height = raw_input()
print "How much do you weigh?",
weight = raw_input()

print "So, you're %r years old, %r tall and %r heavy." % (
	age, height, weight)