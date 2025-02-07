from typing import List, Optional

class PuzzleSolution:
  def __init__(self, hints: Optional[List[str]] = None, words: Optional[List[str]] = None):
    self.hints: List[str] = hints if hints is not None else []
    self.solutions: List[str] = words if words is not None else []