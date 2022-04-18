class TicketMixin:
    """
    Mixin to calculate ticket price based on age
    """
    def calculate_ticket_price(self, age):
        self.age = age
        if self.age < 12:
            ticket_price = 0
        elif self.age < 18:
            ticket_price = 15
        elif self.age < 60:
            ticket_price = 20
        elif self.age >= 60:
            ticket_price = 10
        return ticket_price

class Customer(TicketMixin):
    """
    Create instance of Customer
    """
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def describe(self):
        return f'{self.name} age {self.age} ticket price is {self.calculate_ticket_price(self.age)}'  #tells the string to go to the parent class for the calculate_ticket_price method

customer = Customer('Ryan Phillips', 22)
print(customer.describe())