---
sidebar_position: 1
---

# Rule Processing

The rule system is the core of Auto State. These rules define how states should be updated, and when.

| Field               | Description                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Work item type      | This is the work item type for this rule to trigger on                                                                           |
| Parent type         | This is the work item type of the parent relation. E.g the work item type that should be updated.                                |
| Transition state    | The transitioned state for the rule to trigger on (When work item type changes to this) state                                    |
| Parent not in state | Do not trigger the rule if the parent work item is in this state                                                                 |
| Parent target state | This is the state that the parent work item should transition to                                                                 |
| Children lookup     | Take child work items into consideration when processing the rule. See [Children lookup](#children-lookup) for more information. |


