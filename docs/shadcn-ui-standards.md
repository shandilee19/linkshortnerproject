# shadcn/ui Component Standards

## Overview

All UI elements in this application **must** use shadcn/ui components. Do not create custom components unless absolutely necessary and approved by the team.

## Rules

### ✅ Always Use shadcn/ui
- All buttons, forms, dialogs, cards, dropdowns, etc. must come from shadcn/ui
- Components are pre-built, accessible, and styled with Tailwind CSS v4
- Maintains design consistency across the application
- Available components are installed in `components/ui/`

### ✅ Component Usage
- Import components from `@/components/ui/[component-name]`
- Compose complex UIs by combining shadcn/ui components
- Use props to customize behavior and styling
- All components work seamlessly with TypeScript strict mode

### ✅ Styling Components
- Use Tailwind CSS utility classes for customization
- Combine classes with `cn()` utility from `@/lib/utils` for conditional styles
- All shadcn/ui components accept standard Tailwind `className` prop

### ❌ Never
- Create custom styled components from scratch
- Use CSS-in-JS or styled-components
- Build your own button, form, dialog, etc. when shadcn/ui version exists
- Mix external UI libraries with shadcn/ui without justification

## Examples

### ✅ Correct: Using shadcn/ui Button
```typescript
import { Button } from '@/components/ui/button';

export function MyComponent() {
  return <Button>Click me</Button>;
}
```

### ✅ Correct: Combining shadcn/ui Components
```typescript
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Action</Button>
      </CardContent>
    </Card>
  );
}
```

### ❌ Incorrect: Custom Button
```typescript
// DON'T DO THIS
export function CustomButton() {
  return <button className="px-4 py-2 bg-blue-500">Click</button>;
}
```

## Adding New Components

If a required component doesn't exist in `components/ui/`:

1. Check [shadcn/ui component library](https://ui.shadcn.com/docs/components) for availability
2. Use `npx shadcn-ui@latest add [component-name]` to install
3. Import and use in your code
4. Never create a replacement custom component

## Consistency

Using shadcn/ui ensures:
- Visual consistency across the application
- Accessibility standards compliance (WCAG)
- Responsive design out of the box
- Proper TypeScript typing
- Maintained design system updates
