from pydantic import BaseModel
from typing import List

class SolveRequest(BaseModel):
    puzzle: List[str]
    theme: str
    words: int
    hints: bool = False