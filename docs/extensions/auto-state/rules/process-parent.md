# Process Parents

Setting `Process parents` to `On` will process rules for the parent work item type when finding a rule that matches.

Consider the three following rules:

| Field               | Rule (Task)                               | Rule (User Story)                         | Rule (Feature)                            |
| ------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| Work item type      | `Task`                                    | `User Story`                              | `Feature`                                 |
| Parent type         | `User Story`                              | `Feature`                                 | `Epic`                                    |
| Transition state    | `Active`                                  | `Active`                                  | `Active`                                  |
| Parent not in state | `Active`, `Resolved`, `Closed`, `Removed` | `Active`, `Resolved`, `Closed`, `Removed` | `Active`, `Resolved`, `Closed`, `Removed` |
| Parent target state | `Active`                                  | `Active`                                  | `Active`                                  |
| Children lookup     | `False`                                   | `False`                                   | `False`                                   |
| Process parent      | `True`                                    | `True`                                    | `False`                                   |

When a `Task` is updated from `New -> Active` this will set the state of the parent `User Story` to `Actice`. Since `Process parent` is turned on here, Auto State will then process rules for `User Story` and so on.

This means that with the rules defined above, and the following as the initial states of the work item hierarchy:

- Task: `New`
- User Story: `New`
- Feature: `New`

We will end up with the following states after `Task` is set to `Actice` and processing is completed:

- Task: `Active`
- User Story: `Active`
- Feature: `Active`

## Processing

When processing a rule where parent processing is enabled, Auto State will look for other rules where `Work item type = Parent type`. If any of the found rules have filters added, these filters will also be checked to see if the child work item matches. For the state to be updated, all children must have a matching rule. Process Parent basically works the same way as if you would update the work item manually.
