class Customer:
    """Creates an instance of Customer"""
    def __init__(self, fname, lname, email, phone):
        self.fname = fname
        self.lname = lname
        self.email = email
        self.phone = phone


# The code below will use your class to print values to the terminal after
# it has been written. Comment the lines below back in to test it

customer_one = Customer("Theon", "Greyjoy", "t.gj@email.com", "123456789")
print(customer_one)
print(customer_one.fname)
print(customer_one.lname)
print(customer_one.email)
print(customer_one.phone)


class OrderItem:
    """
    Creates an instance of OrderItem
    """
    def __init__(self, item, price, quantity):
        self.item = item
        self.price = price
        self.quantity = quantity
    
    def description(self):
        return f'{self.quantity} x {self.item} at ${self.price} each' 


# The code below will use your class to print values to the terminal after 
# it has been written. Comment the lines below back in to test it  

order_item_one = OrderItem("bowtie", 10, 3)
print(order_item_one.description())

order_item_two = OrderItem("Fez", 25, 1)
print(order_item_two.description())


class BlogPost:
    """
    Creates an instance of BlogPost
    """
    def __init__(self, title, content, author):
        self.title = title
        self.content = content
        self.author = author
    
    def get_overview(self):#custom method
        return f'{self.title} by {self.author}'
        
    def full_info(self):#custom method
        return f'Blog post: {self.title}. Content: {self.content}. Author: {self.author}'

post = BlogPost('Python Classes', 'Python is known as an object-oriented language...', 'Code Institute')

print(post.get_overview())
print(post.full_info())
