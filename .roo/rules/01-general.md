### **Comprehensive Project Configuration Guide**

---

### **Overview**
This guide serves as a detailed framework for structuring, developing, and maintaining a modern monorepo-based web application. It encompasses configuration details, coding standards, and best practices tailored for advanced application development using contemporary tools and frameworks.

---

### **Project Structure**
**Name**: IEE (Integrated Education Evaluation)  
**Repository Type**: Monorepo (centralized repository for all components)  
**Core Technologies**: React, TypeScript, Vite, Next.js

#### **Monorepo Layout**
```
Root Directory: @iee
├── apps/
│   ├── admin/ (Admin Interface: Vite + React)
│   └── web/ (Public Website: Next.js)
├── packages/ (Shared libraries)
├── configs/ (Centralized configuration files)
│   ├── .env
│   ├── .eslintrc.cjs
│   ├── tsconfig.json
```

---

### **Coding Standards and Development Practices**

#### **1. Code Styling and Component Design**
- **Styling**: Utilize TailwindCSS for utility-first styling. Complement with Mantine for advanced UI components as necessary.
- **Icons**: Standardize icon usage with `@iconify-icon/react`. Example:
    ```tsx
    import { Icon } from '@iconify-icon/react';
    <Icon icon="tabler:search" size={16} />
    ```
- **Component Development**:
  - Adhere to functional component conventions: `const Component = () => {}`.
  - Decompose features into reusable, single-responsibility components.
- **File Organization**:
  - **`entities/`**: Define core business entities.
  - **`requests/`**: Centralize API communication logic.

#### **2. State Management**
- **Server-Side Data**: Leverage TanStack Query for efficient server data caching and synchronization.
- **Client-Side State**: Employ Zustand for lightweight and scalable local state management.
- **Persistence**: Implement robust storage mechanisms adhering to application performance and security requirements.

#### **3. Performance Optimization**
- Decompose large components for maintainability and performance.
- Implement lazy loading strategies to optimize runtime resource utilization.
- Apply React-specific optimizations, such as memoization and context partitioning.

#### **4. API Communication**
Centralize API-related logic in the following directory structure:
```
/apis/
├── queries/ (Read operations)
│   ├── auth.queries.ts
│   ├── institution.queries.ts
├── requests/ (Write operations)
    ├── auth.requests.ts
    └── order.requests.ts
```
- Adhere to a clear separation of concerns for querying and mutation logic.

#### **5. Testing and Validation**
- **Unit Testing**: Implement rigorous testing with Jest, focusing on isolated component behavior.
- **API Mocking**: Simulate API responses using Mock Service Worker (MSW).
- **Component Documentation**: Use Storybook for developing and testing UI components in isolation.

---

### **Application-Specific Details**

#### **Admin Interface**
- **Stack**: Vite + React
- **Features**:
  - Interactive previews via Storybook.
  - Drag-and-drop functionality using `@dnd-kit`.
  - Rich text editing via Lexical Editor.
- **Styling**: Integrate Mantine and TailwindCSS for cohesive and responsive UI.

#### **Public Website**
- **Stack**: Next.js 14, Auth0 (authentication)
- **Features**:
  - Geolocation capabilities with Google Maps API.
  - Dynamic visual effects via Framer Motion.

---

### **Configuration and Tooling**

#### **Environment Management**
- Maintain sensitive configurations within `.env` files.
- Enforce strict access control policies for environment variables.

#### **Code Quality**
- Use ESLint for linting and Prettier for consistent formatting.
- Maintain a unified TypeScript configuration (`tsconfig.json`) to streamline type enforcement.

#### **Continuous Integration/Deployment (CI/CD)**
- Automate testing and deployment pipelines.
- Enforce high code coverage thresholds (minimum 80%) during pull requests.

---

### **Contribution Guidelines**

#### **Directory-Specific Instructions**
- **Admin Application**: Modify features in `@iee/apps/admin`.
- **Public Website**: Update content or functionality in `@iee/apps/web`.
- **Shared Libraries**: Extend shared functionality within `@iee/packages`.

#### **Pre-Merge Checklist**
- Ensure all linting and type-checking rules are satisfied.
- Validate test coverage and functionality integrity.
- Solicit peer reviews for substantial code changes.

---

### **Reference Material**
- [TanStack Query Documentation](https://tanstack.com/query/v4)  
- [Next.js Official Documentation](https://nextjs.org/docs)



#### **Things to remember when writing code (ALWAYS FOLLOW THESE RULES!!)**
Module Name: admin or web
Shared Components Location: ./apps/{Module Name}/src/components/shared

- Reuse shared components in the shared location.
- When creating a form, always use react-hook-form library.
  - The form should be created in the component file and the form state should be managed in the component file. 
  - The form schema should be declared in the component file and the form should be created using the yup schema.
  - The API request schema should be declared in the ./types/requests/<module-name>.requests.ts file.
  - Then import <module-name>.requests.ts in the ./types/requests/index.ts file so that the API request schema is available for the API request functions.
  - The API request functions should be declared in the ./apis/requests/<module-name>.requests.ts file.
  - The API request hooks should be declared in the ./apis/queries/<module-name>.queries.ts file.
  - Then import the query hook in the component file.
- Never destructure react-query hook, always use the hook directly using the dot notation.
- Never use "style" attribute in the component, always use the tailwindcss classes.
- Always use the cn() function declared in the ./src/utils/helpers.ts file to merge tailwindcss classes or to write conditional classes.
- Avoid using <Text> component from Mantine, use the tailwindcss classes instead with <p> or <span> html tags.
- Always use Button component from Mantine for buttons (default size is small & variant is contained).
- Do not declare arrays directly in the component. Always declare the array in the component file and then use the array in the component or else you can use react state to manage the array.
- Try to avoid writing complex logic in the return statement of the component. You can use react hooks to write complex logic.
- Never keep the form object returned from react-hook-form's useForm() or useFormContext() hook in the dependency array of useEffect hook.
- Whenever you are creating any interface for the API response, always declare the interface in the ./types/entities/<module-name>.requests.ts file and then import the interface in the ./types/entities/index.ts file so that the interface is available for the API request functions.

# Shared Components Directory Documentation

Location: Shared Components Location

## Overview
A comprehensive collection of reusable UI components used throughout the admin application.

## Component Categories

### Form Components [react-hook-form]
These components have controlled versions compatible with react-hook-form's FormProvider:

```typescript
// [FORM_COMPONENT_TAG]
{
  Autocomplete: 'ControlledAutocomplete',
  Checkbox: 'ControlledCheckbox',
  ColorInput: 'ControlledColorInput',
  CreatableSelect: 'ControlledCreatableSelect',
  DatePickerInput: 'ControlledDatePickerInput',
  FileUpload: 'ControlledFileUpload',
  MonthPickerInput: 'ControlledMonthPickerInput',
  MultiSelect: 'ControlledMultiSelect',
  NumberInput: 'ControlledNumberInput',
  PasswordInput: 'ControlledPasswordInput',
  PinInput: 'ControlledPinInput',
  Radio: 'ControlledRadio',
  RTE: 'ControlledRichTextEditor',
  Select: 'ControlledSelect',
  Switch: 'ControlledSwitch',
  TextInput: 'ControlledTextInput',
  Textarea: 'ControlledTextarea',
  YearPickerInput: 'ControlledYearPickerInput'
}
```

### Display Components
These components are used to display data in a structured manner:

```typescript
// [DISPLAY_COMPONENT_TAG]
{
  Badge: 'Visual indicator for status/labels',
  Card: 'Container component',
  Table: 'Data display with sorting/filtering',
  OrderTable: 'Specialized table for orders',
  Pagination: 'Page navigation',
  Tooltip: 'Hover information'
}
```

### Navigation Components
These components are used to navigate through the application:

```typescript
// [NAVIGATION_COMPONENT_TAG]
{
  Menu: 'Navigation menu',
  NavItem: 'Navigation item',
  Tabs: 'Tab navigation',
  Stepper: 'Multi-step navigation'
}
```


### Modal Components
These components are used to display modal dialogs:

```typescript
// [MODAL_COMPONENT_TAG]
{
  DeleteModal: 'Confirmation for deletions',
  InfoModal: 'Information display',
  Modal: 'Base modal component',
  Drawer: 'Sliding panel'
}
```


### Special Input Components
These components are used to handle special input types:

```typescript
// [SPECIAL_INPUT_TAG]
{
  CustomAutocomplete: 'Enhanced autocomplete with custom rendering',
  LocationInput: 'Google Maps location picker',
  MultiFileUpload: 'Multiple file upload handler',
  PhoneInput: 'Phone number input with formatting'
}
```

### Form Component Usage with react-hook-form
These components are used to handle form submissions:

```typescript
// [FORM_USAGE_TAG]
{
  required_wrapper: '<FormProvider methods={methods}>',
  required_props: {
    name: 'string (field name in form)',
    control: 'provided by FormProvider'
  },
  common_features: [
    'validation support',
    'error handling',
    'form state integration',
    'automatic value management'
  ]
}
```

### Component Properties Pattern

```typescript
// [COMPONENT_PROPS_TAG]
{
  base_props: {
    label: 'string | ReactNode',
    error: 'string | boolean',
    required: 'boolean',
    disabled: 'boolean'
  },
  controlled_props: {
    name: 'string (required)',
    control: 'Control<FieldValues>',
    rules: 'RegisterOptions'
  },
  styling_props: {
    className: 'string',
    style: 'CSSProperties'
  }
}
```


### Integration Notes
```typescript
// [INTEGRATION_TAG]
{
  form_library: 'react-hook-form',
  ui_framework: 'mantine',
  styling: 'emotion/tailwind',
  validation: 'yup/zod supported'
}
```

### Feedback Components
- `ComingSoon`: Feature placeholder component
- `UnauthorizedComponent`: Access denied display


### Integration Components
- `InjectGoogleMaps`: Google Maps integration component
- `LocationInput`: Location selection component

Each component is modular and follows consistent patterns for props, styling, and behavior. Components are typically structured with separate files for the component logic, types, and styles.

---

# Rules for AI and agent

# Rule 1: Default Uncertainty Handler
# Whenever the agent encounters a scenario where it lacks sufficient information to proceed, it must ask the user for clarification.
RULE 1:
    CONDITION: If the agent does not have enough information to make a decision or provide a response.
    ACTION: 
        - Ask the user clarifying questions.
        - Example questions could include:
            - "Can you provide more details about this scenario?"
            - "What specific information are you looking for?"
            - "Could you clarify your request?"

# Rule 2: Encouraging Engagement
# When the agent detects that the user seems uncertain or confused, it should prompt them for further engagement.
RULE 2:
    CONDITION: If the user's query is vague or lacks context.
    ACTION:
        - Suggest possible directions for the conversation.
        - Example prompts could include:
            - "Would you like to explore options A, B, or C?"
            - "Should we focus on a specific area related to your question?"

# Rule 3: Confirmation of Understanding
# The agent should periodically check in with the user to confirm that it is on the right track.
RULE 3:
    CONDITION: After providing information or taking an action based on user input.
    ACTION:
        - Ask for feedback to ensure satisfaction with the response.
        - Example questions could include:
            - "Does this answer your question?"
            - "Is there anything else you would like to know about this topic?"

# Rule 4: Active Listening
# The agent should reflect key points back to the user to ensure clarity and understanding.
RULE 4:
    CONDITION: When the user provides information or asks a question.
    ACTION:
        - Summarize what the user has said before responding.
        - Example statement could include:
            - "So you are asking about [restate user's question], is that correct?"

# Rule 5: Adaptive Learning
# The agent should learn from past interactions to improve its questioning strategy.
RULE 5:
    CONDITION: After multiple interactions with the user.
    ACTION:
        - Analyze previous queries and responses for patterns.
        - Adjust questioning techniques based on user preferences and styles.

# End of Agent Rules