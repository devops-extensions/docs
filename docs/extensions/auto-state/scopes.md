---
sidebar_position: 2
---

# Scopes

This section describes the scopes that are requested by Auto State, and why they are needed.

| Scope            | Definition                                                                                                                                                                                                                                                      | Reason                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `vso.work_write` | Grants the ability to read, create, and update work items and queries, update board metadata, read area and iterations paths other work item tracking related metadata, execute queries, and to receive notifications about work item events via service hooks. | Need to read and write work items to update state and read configuration fileds |

For definitions, see the [offical documentation](https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#scopes)
