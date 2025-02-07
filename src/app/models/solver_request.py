from pydantic import BaseModel
from typing import List

class SolveRequest(BaseModel):
    puzzle: List[List[str]]
    hints: bool = False