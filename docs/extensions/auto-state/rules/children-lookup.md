---
sidebar_position: 2
---

# Children lookup

This option is in most case only needed when wanting to set the parents state to something like `Resolved` or `Closed`. When `Children lookup` is turned on, the rule system will take child workitems into consideration when processing work items.

As a general rule:

| Category group | Use `Children lookup` |
| -------------- | --------------------- |
| Proposed       | No                    |
| In Progress    | No                    |
| Resolved       | Yes                   |
| Completed      | Yes                   |
| Removed        | Yes                   |

## Processing

When processing a rule where children lookup is enabled, Auto State will look for other rules where `Work item type = Children type` and `Transition state = Parent target state`. If any of the found rules have filters added, these filters will also be checked to see if the child work item matches. For the state to be updated, all children must have a matching rule.

## Examples

To better explain this, let us look at the following setup:

![example-one](/img/auto-state/example-one.png)

### Example One - Closing a user story

Take the following rule:

| Field               | Rule One                        |
| ------------------- | ------------------------------- |
| Work item type      | `Task`                          |
| Parent type         | `User Story`                    |
| Transition state    | `Closed`                        |
| Parent not in state | `Resolved`, `Closed`, `Removed` |
| Parent target state | `Resolved`                      |
| Children lookup     | `False`                         |

When setting `Task (4)` to `Closed`, it will update `User Story (3)` to `Resolved`.

If `Children lookup` was set to `True` for this rule, it would check all other child work items of `User Story (3)` where the target state is the same as the one defined for this rule.

For this scenario it would not change the state of `User Story (3)`, since `Task (5)` does not match the rule condition. If the state of `Task (5)` was `Closed`, it would update the state of `User Story (3)`.

### Example Two - Closing a user story with multiple types as children

Take the following rule:

| Field               | Rule One                        |
| ------------------- | ------------------------------- |
| Work item type      | `Documentation`                 |
| Parent type         | `User Story`                    |
| Transition state    | `Closed`                        |
| Parent not in state | `Resolved`, `Closed`, `Removed` |
| Parent target state | `Closed`                        |
| Children lookup     | `False`                         |

When setting `Documentation (8)` to `Closed`, it will update `User Story (6)` to `Resolved`.

If `Children lookup` was set to `True` for this rule, it would check all other child work items of `User Story (8)` where the target state is the same as the one defined for this rule. Since this parent has two different types of child items (`Documentation` and `Task`) a rule would need to be defined for both of them.

### Example Three - Activating the parent

![example-three](/img/auto-state/example-three.png)

Take the following rule:

| Field               | Rule One                                  |
| ------------------- | ----------------------------------------- |
| Work item type      | `Task`                                    |
| Parent type         | `User Story`                              |
| Transition state    | `Active`                                  |
| Parent not in state | `Active`, `Resolved`, `Closed`, `Removed` |
| Parent target state | `Active`                                  |
| Children lookup     | `False`                                   |

When setting `Task (5)` to `Active`, it will update `User Story (3)` to `Active`.

Currently recursive updates are not implemented, but the feature is planned [GH#1 Allow recursive update of parents](https://github.com/joachimdalen/azdevops-auto-state/issues/1). This feature would allow for setting `User Story (3)`, `Feature (2)` and `Epic (1)` to `Active` when `Task (5)` to `Active`.
