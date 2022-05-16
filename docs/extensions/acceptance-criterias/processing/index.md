# Processing

The following diagram shows the approval flow for acceptance criterias.

![](/img/acceptance-criterias/process.png)

If a criteria has approvers assigned, only the user or a member of the approver group can complete the criteria, when no approvers is assigned, anyone can complete it. Processing can be done from the Criteria Details view.

## Completing

The criteria goes into the `Completed` state when no approvers is assigned.

| ![](/img/acceptance-criterias/text-criteria-complete.png) | ![](/img/acceptance-criterias/text-criteria-completed.png)                   |
| --------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Complete the criteria by selecting `Complete`             | Once completed, you can chose to edit the criteria or reset the state to new |

## Approvals and Rejections

When a criteria is assigned an approver, the criteria goes into the approval flow. Acceptance Criterias supports the following as approvers:

- Users
- Teams
- Permission Groups

Once a Team or Permission Group is assigned as an approver, only one member needs to approve.

| ![](/img/acceptance-criterias/scenario-criteria-send-to-approval.png)                                                                  | ![](/img/acceptance-criterias/scenario-criteria-approve-or-reject.png)                                         |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Send the criteria to approval by selecting `Send to approval`. Processing can now be done by a member of the required approvers group. | The approver can now chose to reject or approve the criteria. Optionally a comment can be added with a reason. |

### Comments

The main comment will show at the top. Old comments can be found under the [history](./history.md) tab of the criteria.

### Rejection

Rejecting a criteria gives additional processing options.

| ![](/img/acceptance-criterias/scenario-criteria-rejected.png)                                   |
| ----------------------------------------------------------------------------------------------- |
| One rejected, the criteria can either be set back to new, or it can be resubmitted for approval |
