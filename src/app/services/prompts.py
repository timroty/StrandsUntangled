def words_prompt_template(words: list[str], theme: str, total_words: int) -> str:
  template = (
      f"You are an AI that solves the NYT Strands puzzle. Strands is a word search game where "
      f"all the words relate to the central theme. A key characteristic of the Strands is the "
      f"spanagram. The spanagram describes the puzzle's theme and all the other words on the "
      f"puzzle relate to it. Below is the theme for today's puzzle and a list of all possible "
      f"words that can be formed from the puzzle. Your task is to return the correct words.\n\n"

      f"The correct words will relate to the theme in a meaningful way, which may involve "
      f"direct associations, wordplay, idioms, puns, or conceptual connections. The theme "
      f"might be broad or tongue-in-cheek, so consider multiple interpretations of the hint. "
      f"The output must be a single line of space-separated words with no additional text. "
      f"The {total_words} you choose MUST be in the words list provided.\n\n"

      f"There are {total_words} in the puzzle, including the spanagram.\n\n"
      f"Theme: {theme}\n\n"
      f"Words: {words}\n\n"
      f"Output: (Return only the correct words separated by spaces, nothing else.)"
  )
  
  return template

def hints_prompt_template(words: list[str], theme:str) -> str:
  template = (
      f"You are an AI that helps solve the NYT Strands puzzle. Strands is a word search game where "
      f"all the words relate to the central theme. A key characteristic of the Strands is the "
      f"spanagram. The spanagram describes the puzzle's theme and all the other words on the "
      f"puzzle relate to it.\n\n"

      f"The theme for today's puzzle is {theme}.\n"
      f"Below is a list of the words in the puzzle.\n"
      f"{words}\n\n"

      f"Your task is to generate 3 hints to help a human player solve the puzzle. The hints should "
      f"have varying levels of specificity and difficulty. The first hint should be the most general "
      f"and the last hint should be the most specific. The hints should be related to the theme and "
      f"should help the player make connections between the words in the puzzle.\n\n"

      f"Output: (Return the 3 hints separated by newlines, nothing else.)"
  )

  return template
