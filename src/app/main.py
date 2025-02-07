from fastapi import FastAPI
from models.solver_request import SolveRequest
from models.trie import Trie
from services.solver_service import solve_puzzle

app = FastAPI(
    title="Strands Untangled API",
    description="A simple backend API for solving NYT Strands puzzles.",
    version="0.1.0"
)

trie = Trie()
trie.load_words("./data/valid_words.txt")

@app.post("/api/solve")
async def solve(request: SolveRequest):
    valid_words = solve_puzzle(request.puzzle, trie.root, request.hints)
    return {"words": valid_words.solutions, "hints": valid_words.hints}
