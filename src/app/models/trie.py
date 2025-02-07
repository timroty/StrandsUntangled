class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word: str) -> bool:
        node = self.root
        for char in word.upper():
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word
    
    def load_words(self, file_path: str):
        with open(file_path, 'r') as file:
            for line in file:
                word = line.strip()
                self.insert(word)