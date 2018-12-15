# def test_Assert_True():
#     assert True

def number_of_people(*args):
    num_sum = 0
    for person in args:
        num_sum += 1
    return num_sum

number_of_people("Alex","Sally","Jonas","Ash","Scott","Cathy")
