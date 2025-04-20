---
id: implementation-testing
title: Implementation and Testing Protocols
sidebar_label: Implementation & Testing
---

This document outlines the protocols for Implementation (ACT/Code MODE) and Testing within the project, based on the guidelines in `.cursor/rules/implement.mdc`.

## Implementation (ACT MODE/Code MODE)

### Programming Principles

- **Algorithm Efficiency:** Use the most efficient algorithms and data structures.
- **Modularity:** Write modular code, breaking complex logic into smaller atomic parts. Whenever possible, break into classes, files, directories, modules, functions, etc.
- **File Management:** Break long files into smaller, more manageable files with smaller functions.
- **Import Statements:** Prefer importing functions from other files instead of modifying those files directly.
- **File Organization:** Organize files into directories and folders.
- **Reuse:** Prefer to reuse existing code instead of writing it from scratch.
- **Code Preservation:** Preserve What Works. Don’t modify working components without necessity.
- **Systematic Sequence:** Complete one step completely before starting another. Keep systematic sequence of functionalities.
- **Design Patterns:** Apply appropriate design patterns for maintainability. Plan for future changes, extendable, flexible, scalable, and maintainable code.
- **Proactive Testing:** Any functionality codes should be accompanied with proper test code as in the Testing section.

### Systematic Code Protocol

**Step 1: Analyze Code**

- **Dependency Analysis:**
    - Which components will be affected?
    - What dependencies exist?
    - Is this local or does it affect core logic?
    - Which functionalities will be affected and how?
    - What cascading effects will this change have?
- **Flow Analysis:**
    - Before proposing any changes, conduct a complete end-to-end flow analysis of the relevant use case from the entry point (e.g., function call, variable initialization) to the execution of all affected code.
    - Track the flow of data and logic throughout all components involved to understand its full scope.
- Document these dependencies thoroughly, including the specific usage of functions or logic in files specified by `@memory.mdc`.

**Step 2: Plan Code**

- If needed, initiate clarification process.
- Use step-by-step reasoning to outline a detailed plan including component dependencies, architectural considerations before coding. Explain all code changes, what each part does, and how it affects other areas.
- **Structured Proposals:**
    - Provide a proposal that specifies: 1) what files, functions, or lines of code are being changed; 2) why the change is necessary (i.e., bug fix, improvement or new feature); 3) all of the directly impacted modules or files; 4) potential side effects; 5) a detailed explanation of any tradeoffs.

**Step 3: Make Changes**

1. Document Current State in files specified by `@memory.mdc`:
    - What’s currently working?
    - What’s the current error/issue?
    - Which files will be affected?

2. Plan Single Logical Change at a Time:
    - **Incremental Rollouts:**
        - One logical feature at a time.
        - Fully resolve this one change by accommodating appropriate changes in other parts of the code.
        - Adjust all existing dependencies and issues created by this change.
        - **Architecture Preservation:** Ensure that all new code integrates seamlessly with existing project structure and architecture before committing changes. Do not make changes that disrupt existing code organization or files.

3. Simulation Testing:
    - **Simulation Analysis:**
        - Simulate user interactions and behaviors by performing dry runs, trace calls, or other appropriate methods to rigorously analyze the impact of proposed changes on both expected and edge-case scenarios.
        - Generate feedback on all potential side effects.
    - **Simulation Validation:**
        - Do not propose a change unless the simulation passes and verifies that all existing functionality is preserved, and if a simulation breaks, provide fixes immediately before proceeding.
    - If Simulation Testing Passes, do the actual implementation.

**Step 4: Perform Testing.**

**Step 5: Loop Steps 1-4 and implement all changes**

- Incorporate all the changes systematically, one by one.
- Verify the changes and test them one by one.

**Step 6: Optimize the implemented codes**

- Optimize the implemented code, after all changes are tested and verified.

### Reference

- Reference relevant documentation and best practices.
- Use web search if needed to refer to documentation or best practices.

## Testing (Always write TEST after IMPLEMENTATION)

- **Dependency Based Testing:** Create unit tests for any new functionality. Run all tests from the analysis phase to confirm that existing behavior is still as expected.
- **No Breakage Assertion:** After you propose a change, run the tests yourself, and verify that it passes. Do not rely on me to do this, and be certain that my code will not be broken.

1. Write test logic in separate files than the code implementation for the functionality to keep the code clean and maintainable.

- **Test Plan:**
    - Think of sufficiently exhaustive test plans for the functionalities added/updated against the requirements and desired outcomes.
    - Define comprehensive test scenarios covering edge cases.
    - Specify appropriate validation methods for the project's stack.
    - Suggest monitoring approaches to verify the solution's effectiveness.
    - Consider potential regressions and how to prevent them.

2. Write test code for ANY added critical functionality ALWAYS. For initial test generation use Dependency Based Testing and No Breakage Assertion. Then use Test Plan to write code for extensive testing.
3. Document testing as specified in `@memory.mdc`.

- When implementing something new, be relentless and implement everything to the letter. Stop only when you're done till successfully testing, not before.

After every code implementation/change ALWAYS do 2 things:
a. Update other possibly affected codes in `src` and other codes at other places.
b. Update the documentation in `docs/` and `tasks/`.