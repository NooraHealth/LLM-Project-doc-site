# Current State

### Current State

### Chat Assignment

- Trigger: A new chat is initiated by a user in a specific
language.
- Action: The system automatically assigns the chat to an MSE based on
language compatibility.
- Tools/Systems Used: Turn’s automation stack with user profile’s
language field.

### Chat Categorization

- Action: The MSE reviews the assigned chats in sequence. For each
chat, the MSE reads the message and categorizes it according to
predefined labels such as greetings, feedback, acknowledgement,
language request, spam, and medical questions.
- Decision Making: This step involves critical thinking to accurately
categorize each chat, ensuring that queries are processed
correctly.

Tools/Systems Used: Turn with labeling capabilities.

### Ticket Creation for Medical
Queries

- Trigger: Identification of a medical query.
- Action: The MSE creates a ticket in Freshdesk (or a similar
ticketing system) specifically for the medical query. This ticket is
then used to track the query’s resolution process.
- Tools/Systems Used: Freshdesk or another customer support ticketing
system.

---