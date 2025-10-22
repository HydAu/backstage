---
'@backstage/ui': minor
---

**BREAKING**: Migrated Collapsible component to React Aria's Disclosure. The component has been renamed and the API has changed.

## Migration Guide

### Component Naming

The old object export pattern has been replaced with individual named exports:

- `Collapsible.Root` → `Disclosure`
- `Collapsible.Trigger` → `DisclosureButton`
- `Collapsible.Panel` → `DisclosurePanel`

### Import Changes

**Before**:

```tsx
import { Collapsible } from '@backstage/ui';

<Collapsible.Root>
  <Collapsible.Trigger />
  <Collapsible.Panel />
</Collapsible.Root>;
```

**After**:

```tsx
import { Disclosure, DisclosureButton, DisclosurePanel } from '@backstage/ui';

<Disclosure>
  <DisclosureButton />
  <DisclosurePanel />
</Disclosure>;
```

### Props Changes

- `open` → `isExpanded`
- `defaultOpen` → `defaultExpanded`
- `onOpenChange` → `onExpandedChange`

### Render Props Pattern Changed

Render props moved from the trigger to the root component.

**Before**:

```tsx
<Collapsible.Root>
  <Collapsible.Trigger
    render={(props, state) => (
      <Button {...props}>{state.open ? 'Close' : 'Open'}</Button>
    )}
  />
  <Collapsible.Panel>Content</Collapsible.Panel>
</Collapsible.Root>
```

**After - Option 1 (Simple wrapper)**:

```tsx
<Disclosure>
  <DisclosureButton>Toggle Content</DisclosureButton>
  <DisclosurePanel>Content</DisclosurePanel>
</Disclosure>
```

**After - Option 2 (Custom button with slot)**:

```tsx
<Disclosure>
  <Button slot="trigger" variant="tertiary">
    Toggle Content
  </Button>
  <DisclosurePanel>Content</DisclosurePanel>
</Disclosure>
```

**After - Option 3 (Render props on root)**:

```tsx
<Disclosure>
  {({ isExpanded }) => (
    <>
      <DisclosureButton>{isExpanded ? 'Close' : 'Open'}</DisclosureButton>
      <DisclosurePanel>Content</DisclosurePanel>
    </>
  )}
</Disclosure>
```

### CSS Changes

If you have custom CSS targeting Collapsible classes, update:

- `.bui-CollapsibleRoot` → `.bui-Disclosure`
- `.bui-CollapsibleTrigger` → `.bui-DisclosureButton`
- `.bui-CollapsiblePanel` → `.bui-DisclosurePanel`
- `--collapsible-panel-height` → `--disclosure-panel-height`
- `[data-starting-style]`, `[data-ending-style]` → `[data-expanded]`
