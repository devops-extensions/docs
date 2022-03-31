# Work Item Wiki

Work Item Wiki is an extension with a custom control to embed existing Wiki Pages into your work item. This can be useful if you want to provide addtional information on your work items. It can be added on an existing page, or as a new tab. For how to do this, refer to the [official documentation](https://docs.microsoft.com/en-us/azure/devops/organizations/settings/work/custom-controls-process?view=azure-devops#add-a-field-level-contribution-or-custom-control).

- `Wiki Url` is the url to the wiki page, it should look something like: `https://dev.azure.com/organization/demo-project/_wiki/wikis/demo-project.wiki/1/This-is-a-page`
- `Version Branch` is used when publishing the wiki from code. If your main branch is not `wikiMaster`, this field must be set to load links, images and attachments correctly.

| ![Config one](/img/work-item-wiki/control-config-1.png) | ![Config one](/img/work-item-wiki/control-config-2.png) |
| ------------------------------------------------------- | ------------------------------------------------------- |

## Example - Bug Criticality

1. Create a new wiki page with information
2. Add a new work item page "Bug Criticality" to the "Bug" work item

![example](/img/work-item-wiki/bug-example.png)
