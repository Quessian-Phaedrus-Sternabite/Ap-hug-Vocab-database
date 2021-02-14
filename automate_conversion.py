# File to automate the conversion of the glosary to txt file

text_file = open("glossory.txt", "r")
glossory = text_file.readlines()
word = []
deffinition = []

for i in range(len(glossory)):
    if (i % 2) == 0:
        word.append(glossory[i])
    else:
        deffinition.append(glossory[i])

word[:] = [line.rstrip('\n') for line in word]
deffinition[:] = [line.rstrip('\n') for line in deffinition]
for i in word:
    print(i.lower())
print("\n \n \n \n \n \n \n")
for i in deffinition:
    print(i)