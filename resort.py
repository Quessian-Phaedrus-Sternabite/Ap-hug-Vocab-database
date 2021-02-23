words = open("words.txt", "r")
deffinitions = open("deffinitions.txt", "r")
words = [x.rstrip("\n") for x in words.readlines()]
deffinitions = [x.rstrip("\n") for x in deffinitions.readlines()]

deffinitions_ref = []
deffinitions_indexed = []
words_sorted = []
for i in words:
    words_sorted.append(i)

for i in words:
    deffinitions_ref.append(words.index(i))

words.sort()
for i in words:
    deffinitions_indexed.append(words_sorted.index(i))


finished_def = []
finished_word = []

for i in deffinitions_indexed:
    finished_word.append(words_sorted[i])
    finished_def.append(deffinitions[i])

for i in finished_word:
    print(i)
print("\n\n\n")
for i in finished_def:
    print(i)