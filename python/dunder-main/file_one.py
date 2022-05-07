# Python module to execute
from file_two import function_three

print("File one __name__ is set to: {}" .format(__name__))


def function_one():
    """
    x
    """
    print("Function one is executed")


def function_two():
    """
    y
    """
    print("Function two is executed")


if __name__ == "__main__":
    print("File one executed when ran directly")
    function_two()
    function_three()
else:
    print("File one executed when imported")


# refer to https://www.freecodecamp.org/news/if-name-main-python-example/
# applies if you want to import a file into another file without the first file immediately executing