from pydantic import BaseModel
from typing import List

class SolveRequest(BaseModel):
    puzzle: List[List[str]]
    theme: str
    hints: bool = False