name: Pull Request
about: Create a pull request
title: ""
labels: []
body:
  - type: markdown
    attributes:
      value: |
        ## Description
        Please describe your changes in detail.
  - type: textarea
    id: changes
    attributes:
      label: What changes were made?
      description: List the key changes in this PR
      placeholder: |
        - Added feature X
        - Fixed bug Y
        - Updated dependency Z
    validations:
      required: true
  - type: dropdown
    id: type
    attributes:
      label: Type of change
      options:
        - Bug fix
        - New feature
        - Documentation update
        - Refactoring
        - Performance improvement
        - Other
    validations:
      required: true
  - type: checkboxes
    id: checklist
    attributes:
      label: Checklist
      options:
        - label: I have tested my changes
          required: true
        - label: I have updated documentation (if needed)
          required: false
        - label: My code follows the project style guidelines
          required: true
