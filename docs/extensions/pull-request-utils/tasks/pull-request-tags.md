# Pull Request Tags

Manage labels for a pull request. Gives the ability to manage pull request tags, or check if a tag is assigned.

## YAML Snippet

```yaml
- task: PullRequestTags@0
  inputs:
    action: assign
    tag: #Tag to perform action on.
    outputVariable: PullRequest.TagCheckResult #The name of the output variable containing the check result
    isOutput: false #If set, `outputVariable` is set as output and accessible from other jobs
    useDefined: false #If set, overrides the value from `System.PullRequest.PullRequestId`
    pullRequestId: $(System.PullRequest.PullRequestId) #If no id is given, the value from `System.PullRequest.PullRequestId` is taken. If a value is given, this overrides the value from `System.PullRequest.PullRequestId`

```

## Arguments

| Argument                               | Description                                                                                                                                                                                                                                     |
| :------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action` <br />Action                  | **(Optional)** <br /> Options: `assign`, `check`, `delete` <br /> Default value: `assign`                                                                                                                                                       |
| `tag` <br />Tag                        | **(Required)** Tag to perform action on. <br />                                                                                                                                                                                                 |
| `outputVariable` <br />Output Variable | **(Required)** The name of the output variable containing the check result <br /> Default value: `PullRequest.TagCheckResult`                                                                                                                   |
| `isOutput` <br />Is output             | **(Optional)** If set, `outputVariable` is set as output and accessible from other jobs <br />                                                                                                                                                  |
| `useDefined` <br />Use defined id      | **(Optional)** If set, overrides the value from `System.PullRequest.PullRequestId` <br />                                                                                                                                                       |
| `pullRequestId` <br />Pull Request Id  | **(Optional)** If no id is given, the value from `System.PullRequest.PullRequestId` is taken. If a value is given, this overrides the value from `System.PullRequest.PullRequestId` <br /> Default value: `$(System.PullRequest.PullRequestId)` |


## Examples

### Assign tag to pull request

Given the following pipeline configuration

```yaml
steps:
  - task: PullRequestTags@0
    inputs:
      tag: 'my-tag'
```

it will assign the tag `my-tag` to the pull request

---


### Remove tag from pull request

Given the following pipeline configuration

```yaml
steps:
  - task: PullRequestTags@0
    inputs:
      action: 'delete'
      tag: 'my-tag'
```

it will remove the tag `my-tag` from the pull request

---


### Check if tag is assigned to pull request

Given the following pipeline configuration

```yaml
steps:
  - task: PullRequestTags@0
    name: 'check_tag'
    inputs:
      action: 'check'
      tag: 'my-tag'
      outputVariable: 'PullRequest.TagCheckResult'
      isOutput: true
```

it will check if the tag `my-tag` is assiged to the active pull request and output the result (`true` / `false`) to the variable `PullRequest.TagCheckResult`

