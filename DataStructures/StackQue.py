# Given a singly linked list, how to you return the middle node in a single pass.


def findMiddle(double_list):
    if(double_list == None):
        return None
    if(double_list.head.next == None):
        return None
    last = double_list.head
    middle = double_list.head
    i = 1

    while last.next == True:
        last = last.next
        i += 1
        if i % 2 == 1:
            middle = middle.next
    return middle

    print(findMiddle(list))
