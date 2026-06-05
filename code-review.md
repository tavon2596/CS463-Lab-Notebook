# Code Review

## Summary
I reviewed the available exercise files and identified two issues in `09-nodejs/exercise/form.html`. The code was updated to fix them.

## Issues Found

### Issue 1: Bootstrap class typo
- **Location:** `09-nodejs/exercise/form.html`
- **Problem:** The main container uses `class="aling-items-center"` instead of `align-items-center`.
- **Why it matters:** This typo prevents Bootstrap’s flex centering utility from working, so the form does not align properly.
- **Fix:** Changed the class to `align-items-center`.

### Issue 2: Labels not associated with inputs
- **Location:** `09-nodejs/exercise/form.html`
- **Problem:** The form labels do not have `for` attributes and the inputs do not have matching `id` values.
- **Why it matters:** Without proper label/input association, the form is less accessible to screen readers and users who click labels expect focus on the corresponding input.
- **Fix:** Added `id="usernameInput"` and `id="emailInput"` to the inputs and matching `for` attributes to the labels.

## Notes
- There is no `index.html` file in this workspace, so I reviewed the available `09-nodejs` exercise page instead.
- The fixes were made directly in `09-nodejs/exercise/form.html`.
