# Create a set
directions = set(['north', 'south', 'east', 'west'])

# Print its members
for direction in directions:
    print(direction)
#note that direction is just a term - it isn't defined anywhere, but semantically it makes sense to the use the singular of the set's name
#Just be sure to include the same term in the print command

# Add an item to the set:
directions.add('northwest')

print()
# Print the members again
# Notice the order cannot be relied upon!
for direction in directions:
    print(direction)