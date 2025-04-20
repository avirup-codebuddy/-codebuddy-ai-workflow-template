---
id: cursor-ai-rules-setup
title: Setting Up Cursor AI Rules
sidebar_label: Setup Cursor AI Rules
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Setting Up Cursor AI Rules

This guide provides step-by-step instructions on how to integrate and configure Cursor AI rules within your project. Following these rules helps maintain code quality, consistency, and adherence to project standards when using AI-assisted development tools like Cursor.

## Prerequisites

Before you begin, ensure you have:

1.  **Cursor Installed:** You need the Cursor editor installed.
2.  **Project Access:** Write access to the project repository where you want to implement the rules.
3.  **Basic Git Knowledge:** Familiarity with Git for managing configuration files.

## Setup Steps

Follow these steps to set up the Cursor AI rules for your project:

### Step 1: Create the Configuration File

Cursor AI rules are typically defined in a configuration file at the root of your project.

1.  **Navigate to your project root directory** in your terminal or file explorer.
2.  **Create a new file** named `.cursor-rules.yaml` (or the specific name required by your Cursor version/setup).

    ```bash
    touch .cursor-rules.yaml
    ```

### Step 2: Define Your Rules

Open the `.cursor-rules.yaml` file in your editor and define the rules you want the AI to follow. Rules are written in YAML format.

**Example `.cursor-rules.yaml`:**

```yaml
# .cursor-rules.yaml

# General Coding Standards
general:
  - rule: Use clear and descriptive variable names.
  - rule: Add comments to explain complex logic.
  - rule: Keep functions concise and focused on a single task. Max 50 lines.

# Language-Specific Rules (Example: TypeScript)
typescript:
  - rule: Use 'interface' for defining object shapes, prefer 'type' for unions or intersections.
  - rule: Avoid using 'any' type. Use specific types or 'unknown'.
  - rule: Enable strict mode in tsconfig.json.
  - rule: Follow the established import order (e.g., external libs, internal modules, relative paths).

# Framework-Specific Rules (Example: React)
react:
  - rule: Use functional components with Hooks instead of class components.
  - rule: Component names should be in PascalCase.
  - rule: Use `key` prop correctly when rendering lists.

# Documentation Rules
documentation:
  - rule: Add JSDoc comments to all exported functions and classes.
  - rule: Ensure README.md is updated with any significant changes.

# Security Rules
security:
  - rule: Do not commit sensitive information like API keys or passwords directly into the code. Use environment variables or secrets management.
  - rule: Sanitize user input to prevent XSS attacks.
```

**Note:** The specific rules and structure might vary. Refer to the official Cursor documentation for the most up-to-date syntax and available rule types.

### Step 3: Commit the Configuration File

Add the `.cursor-rules.yaml` file to your Git repository to share the rules with all contributors.

```bash
git add .cursor-rules.yaml
git commit -m "feat: Add Cursor AI rules configuration"
git push
```

## Applying the Rules

Once the `.cursor-rules.yaml` file is present in the project root:

1.  **Cursor Integration:** Cursor should automatically detect and apply these rules when generating or modifying code within the project.
2.  **Review AI Suggestions:** When Cursor suggests code, review it against the defined rules. The AI will attempt to adhere to them, but manual oversight is still recommended.
3.  **Rule Enforcement:** For stricter enforcement, consider integrating linters (like ESLint, Prettier) configured to match the AI rules, ensuring consistency even in manually written code.

## Troubleshooting

*   **Rules Not Applied:**
    *   Ensure the file is named correctly (`.cursor-rules.yaml` or as specified).
    *   Verify the file is in the project's root directory.
    *   Check the YAML syntax for errors.
    *   Restart Cursor to ensure it picks up the new configuration file.
*   **Conflicting Rules:** If rules seem to conflict, refine them in the `.cursor-rules.yaml` for clarity.

By setting up and maintaining Cursor AI rules, you can leverage AI assistance more effectively while ensuring your project's codebase remains consistent and high-quality.