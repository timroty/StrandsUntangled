from typing import List, Set
from models.trie import TrieNode
from models.puzzle_solution import PuzzleSolution

def solve_puzzle(puzzle: List[List[str]], root: TrieNode, hints: bool) -> str:
  valid_words: Set[str] = find_puzzle_words(puzzle, root)

  return PuzzleSolution(words=valid_words)

def find_puzzle_words(puzzle: List[List[str]], root: TrieNode) -> Set[str]:
  rows: int = len(puzzle)
  cols: int = len(puzzle[0])
  valid_words: Set[str] = set()

  for i in range(rows):
    for j in range(cols):
      word_string: str = puzzle[i][j]
      valid_words |= word_bfs(i, j, puzzle, word_string, root.children[puzzle[i][j]])

  return valid_words

def word_bfs(x: int, y: int, puzzle: List[List[str]], word_string: str, node: TrieNode) -> Set[str]:
  rows: int = len(puzzle)
  cols: int = len(puzzle[0])
  stack: List[tuple[int, int, str, TrieNode, int]] = [(x, y, word_string, node, 0)]
  found_words: Set[str] = set()

  while stack:
    x, y, word_string, node, visited = stack.pop()
    visited |= (1 << (x * cols + y))

    if node.is_end_of_word:
      found_words.add(word_string)

    for i in range(-1, 2):
      for j in range(-1, 2):
        if i == 0 and j == 0:
          continue

        nx: int = x + i
        ny: int = y + j
        if 0 <= nx < rows and 0 <= ny < cols:
          new_letter: str = puzzle[nx][ny]
          if new_letter in node.children and not (visited & (1 << (nx * cols + ny))):
            stack.append((nx, ny, word_string + new_letter, node.children[new_letter], visited))

  return found_words