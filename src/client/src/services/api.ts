import axios from "axios";

export const RequestSolution = async (
  data: SolutionRequest,
): Promise<SolutionResponse> => {
  try {
    var apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.post(`${apiBaseUrl}/api/solve`, data);
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};
