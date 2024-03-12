# Objective

### Enhancing Query Processing

The goal is to develop a workflow that leverages a Large Language Model (LLM) to translate queries into English and accurately extract medical information from sources like medpalm2 or a validated medical question bank. This workflow includes:

- Generating an embedding from the cleaned Frequently Asked Questions (FAQ) database.
- Translating the user's query into English by:
  - Detecting the original language of the query and noting it as `{language}`.
  - If the query isn't in English, translating it into English; otherwise, processing the original message.

**Retrieving Medical Answers**

- Using Retrieval-Augmented Generation (RAG) to provide a generated answer, showcasing the top three retrievals based on the translated query. If no relevant answer is found, the system will display "out of context."
- Utilizing Medpalm2 to obtain a precise answer to the medical query and translating this answer back into the user's language for clarity.

The system then translates the answer to the previously noted `{language}` and presents it to the user.

Priority Medium:

If the input and output languages are specified:

1. Utilize AI 4 Bharat's transliteration and translation APIs for conversion.

**Feedback Mechanism**

- **Interface:** Introduce a feedback mechanism post-answer with options for thumbs up (👍) or thumbs down (👎) and an optional text box for comments.
- **Process:** Store feedback with the query, its translation, and the response to analyze performance and make improvements.

  - Include a feature that allows users to specify their expected answer in a textbox when the response is insufficient or incorrect.

**Logging System**

- **Query Logging:** Document the original query, its detected language, and the translated query. Log both the original and translated responses.
- **Retrieval and Response:** Keep records of the top sources, the summarized answer, and its translation.

- **Feedback:** Record user feedback (rating and comments) alongside the related query and response.

**API Endpoints**

- **Medical Query API Endpoint:**

  - Endpoint: `/medical_query`
  - Method: POST
  - Description: Retrieves the final medical response along with the top sources (excludes Medpalm data).

    ```jsx
    {
      "query": "User's medical query"
    }
    ```

  - Response Payload:

    ```jsx
    {
      "final_answer": "The translated final answer",
      "top_sources": ["Top source 1", "Top source 2", "Top source 3"]
    }
    ```

- **Feedback API Endpoint:**

  - Endpoint: `/feedback`
  - Method: POST
  - Description: Manages user feedback, capturing their rating, comments, and suggestions for the ideal answer.

    ```jsx
    {
      "query": "User's original query",
      "answer": "Translated final answer",
      "feedback": "👍 or 👎",
      "comments": "Optional comments",
      "ideal_answer": "Optional suggestion for the ideal answer"
    }
    ```

  - Response: Indicates the operation's success or failure with an HTTP status code.
