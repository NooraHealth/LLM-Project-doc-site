# Desired State

As shown in the previous page, chat assignment, chat categorisation, and ticket creation for medical queries pass through various manual processes that might be subjected to human errors and efficiency gaps. Through the intent recognition system, the aim is to solve for all these blockers in a systematic fashion.

### Enhanced Intent Recognition:

In order to protect the bandwidth of the Medical Support Executives (MSEs) to specifically answer medically relevant questions, we set up systems to automatically filter out non-medical messages directed to the MSEs.

The broader category of non-medical messages include:

- Greetings
- Acknowledgments
- Spam
- Requests to change language
- Medical Questions (Assigned)
- High Risk Intent (Assigned)
- Others (Assigned)

After identifying the non-medical intent in-terms of these broad categories, an approved response for each classification is initiated.

| Category  | Example |  Expected Response |
|---|---|---|
| Greeting  |  Hai, hi |  Hello there. How can we help? |
| Acknowledgements  | ok  |  (no response) |
|  Spam | Please purchase my ICICI Loan  | (no response) |
| Requests to change language  |  Change to Hindi |  Thank you for your response. Would you like to receive further messages in Hindi? |
| Medical questions  | My baby is having high fever  | (assigned a ticket)   |
|  High Risk Intent | my baby is choking, need immediate help  | Please contact the nearest health facility fior more information (assigned a ticket)  |

> As shown above, some categories such as spam, acknowledgements don't have any expected response. This is intentional, and is meant to ensure the system uses responses in a judicious fashion.


### Ticket Creation

In the future state, we expect a more seamless ticket creation [process for medical queries](docs/Intent%20Recognition%20System/References/Bibliography.md). MSE no longer needs to manually log the query onto the ticketing platform. 

The current process of manual ticket creation for medical messages would be redacted once we evaluate the accuracy of this system.



