import random

def ten_rand_nums():
    random_numbers = []
    for number in range(10): # uses a range to specify how many times the loop should execute - in this case 10 times
        random_number = random.randrange(101)  # generates a random number between 0 and 100
        random_numbers.append(random_number)
    return random_numbers

result = ten_rand_nums()
print(result)

random.shuffle(result)

print(result)