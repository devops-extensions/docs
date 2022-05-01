---
sidebar_position: 2
---

# Scopes

This section describes the scopes that are requested by Acceptance Criterias, and why they are needed.

| Scope         | Reason                                                | Definition                                                                                                                                                                                                                                                             |
| ------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vso.graph`   | Need to read group membership to check for approvals  | Grants the ability to read user, group, scope, and group membership information.                                                                                                                                                                                       |
| `vso.work`    | Need to read work item metadata and configuration     | Grants the ability to read work items, queries, boards, area and iterations paths, and other work item tracking related metadata. Also grants the ability to execute queries, search work items and to receive notifications about work item events via service hooks. |
| `vso.project` | Need to read project and teams to check for approvals | Grants the ability to read projects and teams.                                                                                                                                                                                                                         |

For definitions, see the [official documentation](https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#scopes)
