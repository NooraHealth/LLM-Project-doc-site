# Current State

There are three key steps towards processing a health query: chat assignment, and chat categorisation, and ticket creation.

### Chat Assignment

#### Key Actions

- A new chat is initiated by the user in a specific language.
- The TURN platform automatically assigns the chat to an MSE based on round-robin approach.

#### Tools/Systems used
Turn’s automation stack with user profile’s language field.

### Chat Categorization

#### Key Actions

- MSE reviews the assigned chats in sequence.
- MSE reads through each message one-by-one and categorises it according to predefined labels such as greetings, feedback, acknowledgement, spam, others etc.


As this process is manual and takes time to manually evaluate each question, it's difficult to ensure that the queries are processed correctly. Apart from that, it takes up a significant bandwidth from the MSEs, as they spend more time sorting through questions than actually evaluating the medical health responses.


#### Tools/Systems used
Turn with labeling capabilities.

### Ticket Creation for Medical Queries

#### Key Actions

- Medical queries are identified as such 
- MSE logs into the ticketing platform and manually creates the ticket
- From ticket creation to ticket resolution, everything is tracked on Freshdesk

#### Tools/Systems used
Freshdesk or another customer support ticketing
system.

---