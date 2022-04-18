cars = {'ford': 10, 'opel': 5 }

def get_val(key):
    try:
        return cars[key] # this is how you access a sequence, in this case the cars dictionary
    
    except:
        return None
    
ford = get_val('ford')
print(ford) # prints 10, since ford is in the cars dictionary

hyundai = get_val('hyundai')
print(hyundai) # prints None, since hyundai is not in the cars dictionary, thus triggering the except statement


def update_cars(data, key, val):
    try:
        data[key]
    
    except KeyError as e:
        print(f'No key {e} in dictionary')
    
    else:
        data[key] = val
    
    finally:
        return data
        
update_cars(cars, 'mazda', 8)        

# Do Not Place Code Below This Line 
# This will print out the cars dictionary after the update_cars function is called
print(cars)