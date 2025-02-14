type SolutionRequest = {
  puzzle: string[];
  words: number;
  theme: string;
  hints: boolean;
};

type SolutionResponse = {
  words: string[];
  hints: string[];
};
