
### Current User Journey

If we .... (current journey description)

Image (to be added) on the top level overview of the journey (assignment, categorisation, ticket creation, FAQ bank search, translation)

### Chat Assignment

- Trigger: A new chat is initiated by a user in a specific language.
- Action: The system automatically assigns the chat to an MSE based on language compatibility.
- Tools/Systems Used: Turn’s automation stack  with user profile’s language field.

### Chat Categorization

- Action: The MSE reviews the assigned chats in sequence. For each chat, the MSE reads the message and categorizes it according to predefined labels such as greetings, feedback, acknowledgement, language  request, spam, and medical questions.
- Decision Making: This step involves critical thinking to accurately categorize each chat, ensuring that queries are processed correctly.

Tools/Systems Used: Turn with labeling capabilities.

### Ticket Creation for Medical Queries

- Trigger: Identification of a medical query.
- Action: The MSE creates a ticket in Freshdesk (or a similar ticketing system) specifically for the medical query. This ticket is then used to track the query's resolution process.
- Tools/Systems Used: Freshdesk or another customer support ticketing system.

### FAQ Bank Search

Action: Before escalating the query, the MSE searches the FAQ bank to check if there is already an answer to the user's question. This step is crucial for efficient query resolution and minimizing doctor involvement for frequently asked questions.

- Outcome: If an answer is found, it's prepared to be sent to the user. If not, the MSE proceeds to the next step.
- Tools/Systems Used: Internal FAQ bank or knowledge base.

### Translation and Escalation for Unanswered Questions

- Action (if the FAQ does not contain an answer):
- Translation Request: The MSE raises a request to translate the query into a language that the doctor can understand.
- Doctor Escalation: Once translated, the query is escalated to a doctor for a professional medical response.
- Waiting for Response: The MSE waits for the doctor's response, monitoring the ticket status.

Translation of Doctor's Response: Upon receiving a response, the MSE raises another request to translate the doctor's response back into the user's language.

Outcome: The translated response is sent back to the user, resolving their query.

Tools/Systems Used: Translation services, doctor communication portal, and the ticketing system for tracking.