class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None

# INSERT METHOD

    def insert(self, data):
        newNode = Node(data)
        if(self.head):
            current = self.head
            while(current.next):
                current = current.next
            current.next = newNode
        else:
            self.head = newNode

# PRINT METHOD

    def printLL(self):
        current = self.head
        while(current):
            print(current.data)
            current = current.next


ll = LinkedList()
ll.insert(3)
ll.insert(4)
ll.insert(5)
ll.printLL()
