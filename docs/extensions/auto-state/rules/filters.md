---
sidebar_position: 3
---

# Filters

With auto state you are only allowed to create a single entry with the same conditions. This might make it difficult to scope down rules in a project with many users and many teams. To makes this easier, version `1.3.0` of Auto State introduced filters.

`Main conditions` = Options set under the `Details` tab

Filters allows you to add extra conditions on fields that will be checked before a rule is updated. When creating filters you add them as groups. A single group can be looked at as `Match = main conditions + (work item filters + parent filters)`. All conditions within a single group needs to match for the rule to match.

If a rule contains no filters, it will match on all work items where the main conditions match.

Filters also affect [children lookup](./children-lookup.md) and [parent processing](./process-parent.md).

## Work item and Parent filters

When defining filters, you are able to set them for one of two items, `Work Item` and `Parent`. Work item filters applies to the main work item being updated while parent filters applies to the parent of the current work item. You are not required to set both.

## Supported Fields

Filters can be added for fields of the following types:

- Tree Path
- Boolean
- Identity
- Integer
- Plain Text
- String

## Special Conditions

### Tags

When selecting the `Tags` field, you will be presented with a tag picker to select the tags. This will only work for tags that are already assigned to a work item. If you need to add a tag that is not presented in the picker, add this to a work item and reload the window.

### Identities

When selecting a identity field (Such as `Assigned To`) you will be presented with an identity picker. This will only work for the persons added to the current project.

## Example

|                                                |                                                                                                                               |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/auto-state/filter-groups-example.png) | This example would match tasks with set `Main conditions` that are located under the `AreaPath` - `Team Retail` or `Team Web` |
