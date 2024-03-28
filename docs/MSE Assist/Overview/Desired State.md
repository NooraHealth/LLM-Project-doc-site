# Desired State

For the desired state, we envision The AI copilot assisting the MSE to perform a thorough 4C (Consistent, Complete, Contextual and Correct) review for every response provided.

## Process

The eventual desired state consists of the following key functions:

![Untitled](img/image2.png)

### Minimising Wait-times through Curated FAQs 

To improve the efficiency and user satisfaction during periods of wait, we aim to implement a feature that automatically presents patient caregivers with a curated list of frequently asked questions and their corresponding answers relevant to their medical inquiries.

This proactive approach aims to provide immediate assistance and potentially resolve queries even before an actual response is received from the Medical Support Expert (MSE). If the curated list of frequently asked questions resolves their query, then the concern ticket assigned to the MSE is resolved.


### Enhancing Query Processing

The goal is to develop a workflow that leverages a Large Language Model (LLM) to translate queries into plain english and accurately extract medical information from sources such as Medpalm2 or any other validated source of a medical question bank. 

This workflow includes:

- Generating an embedding from the clean dataset of Frequently Asked Questions (FAQ).
- Translating the user's query into English by:
  - Detecting the original language of the query and noting it as `{language}`.
  - If the query isn't in English, translating it into English; otherwise, processing the original message.


### Language-based routing
To ensure swift and effective resolution of
user medical queries, we are adapting a language-based routing system. This protocol assigns queries to Medical Support Executives (MSEs) who are proficient in the relevant languages,thereby guaranteeing a seamless and efficient communication flow.)

### Retrieving Medical Answers

- Using Retrieval-Augmented Generation (RAG) to provide a generated answer, showcasing the top three retrievals based on the translated query. If no relevant answer is found, the system will display "out of context."
- Utilizing Medpalm2 to obtain a precise answer to the medical query and translating this answer back into the user's language for clarity.

The system then translates the answer to the previously noted `{language}` and presents it to the user.

If the input and output languages are specified, we aim to utilise AI 4 Bharat's transliteration and translation APIs for conversion.

### Feedback Mechanism

#### Interface

Introduce a feedback mechanism post-answer with options for thumbs up (👍) or thumbs down (👎) and an optional text box for comments.

#### Process

- Store feedback with the query, its translation, and the response to analyze performance and make improvements.

- Include a feature that allows users to specify their expected answer in a textbox when the response is insufficient or incorrect.

### Logging System

#### Query Logging

Document the original query, its detected language, and the translated query. Log both the original and translated responses.

#### Retrieval and Response

Keep records of the top sources, the summarized answer, and its translation.

#### Feedback

Record user feedback (rating and comments) alongside the related query and response.


![Untitled](img/image1.png)
![Untitled](img/image3.png)


