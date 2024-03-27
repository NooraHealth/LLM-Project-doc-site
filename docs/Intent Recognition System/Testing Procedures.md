# Testing Plan

The testing of the Intent Recognition System will be conducted in three distinct phases. Each phase is designed to progressively validate the system's accuracy and efficiency in categorizing incoming messages, with an increasing level of automation and integration into the daily operations of Medical Support Executives (MSEs).

## Test Phase 1: Observation Mode

**Objective**: Silently evaluate the accuracy of the Intent Recognition System by comparing its categorizations against those made by MSEs without affecting current operations.

### Steps:

1. **Configuration**: Set up the Intent Recognition System to run in observation mode, where it categorizes incoming messages in the background.
2. **Normal Operation**: Allow MSEs to label incoming messages as per the existing process without awareness of the system's categorizations.
3. **Data Collection**: Collect data on the labels assigned by MSEs and the categorizations made by the Intent Recognition System for the same messages.
4. **Analysis**: Compare the system's categorizations against MSE labels to assess accuracy, identify patterns in discrepancies, and adjust the system accordingly.

## Test Phase 2: UI Labeling

**Objective**: Test the system's integration with the user interface by displaying its categorizations to MSEs, allowing them to correct any inaccuracies.

### Steps:

1. **UI Integration**: Modify the TURN platform's UI to display labels assigned by the Intent Recognition System for each chat.
2. **Human in the Loop**: Instruct MSEs to review the system's categorizations and add or adjust labels if the categorization is found to be incorrect.
3. **Feedback Loop**: Collect feedback from MSEs on the system's accuracy and the intuitiveness of correcting categorizations.
4. **System Refinement**: Use MSE feedback and correction patterns to refine the intent recognition algorithms and improve categorization accuracy.

## Test Phase 3: Medical vs. Non-Medical Segregation

**Objective**: Fully integrate the Intent Recognition System into the operational flow, automatically segregating non-medical messages and allowing MSEs to focus on medically relevant queries.

### Steps:

1. **Automatic Segregation**: Configure the Intent Recognition System to automatically assign non-medical messages to a separate bucket, directing only medically relevant questions to MSEs.
2. **Teletrainer Review**: Assign a team of teletrainers to regularly check the non-medical chat bucket for classification errors, ensuring no medical queries are incorrectly categorized.
3. **Action Based on Classification**: Enable the Intent Recognition System to respond to or take action on non-medical messages based on their classification (e.g., automated responses for greetings or spam).
4. **Evaluation and Adjustment**: Monitor the system's performance in segregating messages and the accuracy of automated actions, making necessary adjustments to improve reliability and efficiency.

## Overall Testing Strategy

The phased testing approach allows for a careful evaluation of the Intent Recognition System's performance, starting from a non-intrusive observation mode to a full integration with operational processes. This strategy ensures that adjustments can be made before full deployment, minimizing the impact on MSEs' workload and maintaining the quality of user interactions. Regular feedback loops and data analysis are critical at each phase to refine the system's algorithms and ensure that it meets the operational needs of Noora Health.
