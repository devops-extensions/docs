# Scopes

This section describes the scopes that are requested by Work Item Wiki, and why they are needed.

| Scope      | Definition                                                                                                                                                                                                                                                             | Reason                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `vso.code` | Grants the ability to read source code and metadata about commits, changesets, branches, and other version control artifacts. Also grants the ability to search code and get notified about version control events via service hooks.                                  | Need to read repositories to be able to find the base url for attachments and images |
| `vso.wiki` | Grants the ability to read wikis, wiki pages and wiki attachments. Also grants the ability to search wiki pages.                                                                                                                                                       | Need to read Wikis so page content can be extracted                                  |
| `vso.work` | Grants the ability to read work items, queries, boards, area and iterations paths, and other work item tracking related metadata. Also grants the ability to execute queries, search work items and to receive notifications about work item events via service hooks. | Need to read work items to be able to create links to work items                     |

For definitions, see the [offical documentation](https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#scopes)
