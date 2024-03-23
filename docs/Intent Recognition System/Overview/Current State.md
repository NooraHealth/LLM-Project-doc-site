# Current State

The journey of a health query can be broadly classified into two main buckets -- chat assignment, and chat categorisation.

### Chat Assignment

#### Key Actions

- A new chat is initiated by the user in a specific language.
- A ticket is manually created by the MSE on the Freshdesk platform
- The TURN platform automatically assigns the chat to an MSE based on round-robin approach.

#### Tools/Systems used
Turn’s automation stack with user profile’s language field.

### Chat Categorization

#### Key Actions

- MSE reviews the assigned chats in sequence.
- MSE reads through each message one-by-one and categorises it according to predefined labels such as greetings, feedback, acknowledgement, spam, others etc.
- 

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