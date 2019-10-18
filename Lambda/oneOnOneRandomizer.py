

from random import shuffle
list1 = [
    "Chris York",
    "Adetunji Shennaike",
    "Arvin Agas",
    "Elijah McKay",
    "Ryan Wisniewski",
    "Andy Dillon",
    "Timothy McGowen"
]
shuffle(list1)

for i in range(len(list1)):
    print(i, end=" ")
    print(list1[i])
