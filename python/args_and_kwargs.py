def make_string(*strings):
    sentence = ""
    for word in strings:
        sentence =" ".join(strings)
    return sentence

my_string = make_string("Alderaan","Coruscant","Dagobah","Endor","Hoth")
print(my_string)

def get_age(**data):
    if 'age' in data:
        return data['age']
    else:
        return 'no age provided'
    
pats_age = get_age(name='pat', level=4, age=33, occupation='postman')
print(pats_age)