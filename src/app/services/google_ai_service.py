from google import genai
import os

def query_model(prompt: str) -> str:
  client = genai.Client(api_key=os.getenv('GOOGLE_API_KEY'))

  response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=prompt,
  )

  return response.text