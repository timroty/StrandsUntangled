# Strands Untangled API

A simple backend API for solving NYT Strands puzzles.

## Setup

### 1. Create a Virtual Environment

```sh
python3 -m venv venv
```

### 2. Activate the Virtual Environment
On macOS and Linux:
```sh
source venv/bin/activate
```

On Windows:
```sh
.\venv\Scripts\activate
```

### 3. Install Dependencies

```sh
pip install -r requirements.txt
```

### 4. Create the Environment File

Create a file in the root of the `app` folder called `.env` with the following data.

```
GOOGLE_API_KEY={YourAPIKey}
```

## Running the Application
To run the application, use the following command:

```sh
uvicorn main:app --reload
```
