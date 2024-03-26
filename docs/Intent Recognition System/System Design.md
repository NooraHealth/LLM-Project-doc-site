# System Design


### Design Principles

#### Human in the loop

When it comes to medical responses, we always ensure that the 'human' is always in the loop. Involving a medical expert guarantess the responses are always accurate, reliable and appropriate. This also ensures the trust is maintained for the users, and there is no potential harm whatsoever due to incorrect information or advice. Human-in-the-loop also ensures a system of continuous feedback, avoiding any hallucinations from an AI-only response.


#### Most Important In, Most Important Out

As there might be all sorts of queries which come in, as a health-information provider, as a principle, we ensure that the most important/critical medical queries are answered first. And this would mean de-prioritising other items in the query queue which might be lesser in terms of importance.

For example, queries related to emergency situations, severe symptoms, or urgent medical advice are always prioritised. 




