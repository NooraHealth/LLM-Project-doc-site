# Objective

# Objective

### Enhancing Query Processing

The goal is to develop a workflow that leverages a Large Language Model (LLM) to translate queries into English and accurately extract medical information from sources like medpalm2 or a validated medical question bank. The workflow entails:

- Generating an embedding from the cleaned Frequently Asked Questions (FAQ) database.
- Translating the user's query into English by:
    - Detecting the query's original language and noting it as {language}.
    - If the query isn't in English, translating the message to English; otherwise, proceeding with the message as is.

**Retrieving Medical Answers**

- Utilizing RAG (Retrieval-Augmented Generation) to derive a generated answer, displaying the top three retrievals based on the translated query. Should there be no relevant answer, the system will indicate "out of context."
- Employing Medpalm2 to secure a precise answer to the medical query, then translating this answer back into the initially recorded {language} for user comprehension.

Translate the answer to the saved {language} field and output the answer.

Priority Medium:

If a message’s input and output language is given:

1) Translate with AI 4 bharat’s transliteration and translation apis.

**Feedback Mechanism**

Interface: Introduce a feedback interface post-answer with thumbs up (👍) or thumbs down (👎) icons and an optional text box for comments.

Process: Collect and store feedback alongside the user's query, its translation, and the response for performance analysis and improvements.

- Implement a feature allowing users to specify their expected answer in a text box when no response is generated or if the provided answer is incorrect.

**Logging System**

Query Logging: Record the original query, its detected language, and the translated English query. If a response is translated back, log both versions.

Retrieval and Response: Log the top sources, and the summarized and translated answer.

Feedback: Document the user's feedback (rating and comments) linked to the query and response.

![Objective%204bfbb6d47e1140209e7c5daa74a74d8d/image2.png](Objective%204bfbb6d47e1140209e7c5daa74a74d8d/image2.png)

Example design of the MVP (WIP):

![Objective%204bfbb6d47e1140209e7c5daa74a74d8d/image1.png](Objective%204bfbb6d47e1140209e7c5daa74a74d8d/image1.png)

![Objective%204bfbb6d47e1140209e7c5daa74a74d8d/image3.png](Objective%204bfbb6d47e1140209e7c5daa74a74d8d/image3.png)

Medical Query API Endpoint:

Endpoint: /medical_query

Method: POST

Description: This endpoint retrieves the final answer to the medical query along with the top sources (not available for Medpalm).

Request Payload:

```jsx
{
    "query": "User's medical query"
}

```

Response Payload:

```jsx
{

"final_answer": "The translated final answer",

"top_sources": ["Top source 1", "Top source 2", "Top source 3"]

}
```

Feedback API Endpoint:

Endpoint: /feedback

Method: POST

Description: This endpoint manages user feedback, allowing them to provide a thumbs up or down, input comments, and suggest an ideal answer.

Request Payload:

json

```jsx
{

"query": "User's original query",

"answer": "Translated final answer",

"feedback": "👍 or 👎",

"comments": "Optional comments",

"ideal_answer": "Optional suggestion for the ideal answer"

}
```

Response: HTTP status code indicating success or failure.