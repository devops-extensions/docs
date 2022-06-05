# Activating the extension

For this extension to work properly there are a few steps that needs to be taken after installing:

### Activation

Activation is done through the Preview Feature "Auto State". This needs to be enabled for each Project this extension should be used in. This feature flag is scoped to individual projects, that means you need to be inside a project for the feature flag to appear. The url should look something like `https://dev.azure.com/ORGANIZATION/PROJECT`

When you open the modal with all the feature flags the dropdown should have three options

- `for me [Your name]`
- `for this project [Project Name]` (This is the one you should select)
- `for this organization [Organization Name]`

![feature-toogle](/img/auto-state/feature-toggle.png)

- Rules needs to be configured. The rule editor is found under `Project Settings > Extensions > Auto State`