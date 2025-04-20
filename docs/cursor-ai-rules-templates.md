---
sidebar_label: 'Rule Templates'
title: 'Cursor AI Rule Configuration Templates'
---

# Cursor AI Rule Configuration Templates

This document provides ready-to-use templates for common Cursor AI rule configurations. You can adapt these examples to define specific behaviors, constraints, and contexts for the AI assistant within your project.

These templates are designed to be placed within your `.cursor-ai/rules.yaml` file or equivalent configuration setup.

## Language Preference

Specify the primary language the AI should use for communication and thought processes.

```yaml
# .cursor-ai/rules.yaml
general:
  language_preference: "English" # Or "Spanish", "French", etc.
```

## Mode-Specific Instructions

Define rules that apply only when the AI is operating in a particular mode. This allows for specialized behavior based on the current task context.

**Example: Restricting file edits for the 'Architect' mode**

```yaml
# .cursor-ai/rules.yaml
mode_specific_instructions:
  architect: # Mode slug
    file_restrictions:
      allowed_patterns:
        - "\\.md$" # Allow editing only Markdown files
        - "architecture/.*\\.drawio$" # Allow editing Draw.io files in architecture/
      # forbidden_patterns: # Optionally forbid specific files/patterns
      #   - "src/.*"
    prompt_guidelines:
      - "Focus on high-level design and system structure."
      - "Avoid implementation details unless necessary for architectural illustration."
      - "Generate diagrams using Mermaid syntax where appropriate."
```

**Example: Guiding the 'Tester (TDD)' mode**

```yaml
# .cursor-ai/rules.yaml
mode_specific_instructions:
  tdd: # Mode slug
    prompt_guidelines:
      - "Write failing tests first (Red)."
      - "Implement the minimal code required to make the test pass (Green)."
      - "Refactor the code while ensuring tests still pass (Refactor)."
      - "Focus on unit tests and clear assertions."
    file_restrictions:
      allowed_patterns:
        - ".*\\.test\\.(ts|js)$" # Allow editing test files
        - "src/.*\\.(ts|js)$"    # Allow editing source files
```

## General Project Rules

Define overarching rules that apply regardless of the active mode.

**Example: Enforcing Code Style**

```yaml
# .cursor-ai/rules.yaml
general:
  coding_standards:
    - "Follow the Google TypeScript Style Guide."
    - "Use Prettier for code formatting (run `pnpm format` before finalizing)."
    - "All functions must have JSDoc comments."
```

**Example: Defining Project Context**

```yaml
# .cursor-ai/rules.yaml
general:
  project_context:
    - "This is a Docusaurus v3 project for documenting internal tools."
    - "The target audience is internal developers."
    - "Key technologies: React, TypeScript, Node.js."
```

## Memory Bank Strategy (Advanced)

Define how the AI should initialize, read, and update Memory Bank files for maintaining long-term context. (Refer to specific Memory Bank documentation for detailed setup).

```yaml
# .cursor-ai/rules.yaml
memory_bank_strategy:
  initialization: |
      <thinking>
      - **CHECK FOR MEMORY BANK:** Check if memory-bank/ exists.
      </thinking>
      <if_memory_bank_exists>
        **READ ALL MEMORY BANK FILES**
        Plan: Read mandatory files sequentially.
        1. Read `productContext.md`
        2. Read `activeContext.md`
        3. Read `systemPatterns.md`
        4. Read `decisionLog.md`
        5. Read `progress.md`
        6. Set status to [MEMORY BANK: ACTIVE] and inform user.
        7. Proceed with the task using Memory Bank context.
      </if_memory_bank_exists>
      <if_no_memory_bank>
        1. **Inform User:** "No Memory Bank found. Recommend creating one."
        2. **Offer Creation:** "Switch to Architect mode to create?"
        3. **Handle Response:** (Proceed based on user choice)
      </if_no_memory_bank>

  # Define update triggers and actions for each memory bank file
  memory_bank_updates:
    frequency:
      - "UPDATE MEMORY BANK WHEN SIGNIFICANT CHANGES OCCUR."
    decisionLog.md:
      trigger: "When a significant architectural decision is made."
      action: |
        <thinking>Update decisionLog.md</thinking>
        Use insert_content to *append* new decision with rationale and timestamp.
      format: "[YYYY-MM-DD HH:MM:SS] - [Decision Summary]"
    # ... (add update rules for other memory bank files) ...
```

## Combining Rules

You can combine multiple rule types in your configuration file.

```yaml
# .cursor-ai/rules.yaml
general:
  language_preference: "English"
  project_context:
    - "Project: Internal Developer Portal"
    - "Tech Stack: React, Node.js, PostgreSQL"

mode_specific_instructions:
  code:
    prompt_guidelines:
      - "Prioritize code clarity and maintainability."
      - "Include unit tests for new functionality."
    file_restrictions:
      allowed_patterns:
        - "src/.*\\.(ts|tsx|js|jsx|css)$"
        - "tests/.*\\.test\\.(ts|js)$"
      forbidden_patterns:
        - "config/.*" # Don't touch configuration files directly

  docs-writer:
    prompt_guidelines:
      - "Write clear, concise, and accurate documentation."
      - "Use Markdown with Docusaurus extensions."
      - "Target audience: Developers using the portal."
    file_restrictions:
      allowed_patterns:
        - "docs/.*\\.md$"
        - "blog/.*\\.md$"

# ... other rules like memory_bank_strategy ...
```

Remember to tailor these templates to your specific project needs and conventions.