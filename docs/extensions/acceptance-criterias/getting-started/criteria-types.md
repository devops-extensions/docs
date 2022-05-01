---
sidebar_position: 1
---

# Criteria Types

Currently the extension provides three types of access criterias that can be used.

## Rule-oriented - (Checklist)

The checklist criteria allows you to create a single acceptance criteria with several sub criterias. [Create a new checklist criteria](../work-item-control/creating-criterias/checklist-criteria.md)

## Scenario-oriented - (Scenario)

Scenario oriented criterias follows the _Given/When/Then_ sequence and allows you to setup a scenario for the criteria. The GWT sequence would look something like:

- _Given_ some prediction
- _When_ I do some action
- _Then_ I exepect some result

This extension also adds a _And_ sequence element. [Create a new scenario criteria](../work-item-control/creating-criterias/scenario-criteria.md)

## Simple - (Text)

By defualt Azure DevOps provides a single text field to create your acceptance criterias. This extension also provides a type textfield if your criterias does not fit into the rule-oriented or scenario-oriented model. [Create a new text criteria](../work-item-control/creating-criterias/text-criteria.md)
