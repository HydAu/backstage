---
'@backstage/frontend-plugin-api': patch
---

Added support for plugin-relative `attachTo` declarations for extension definitions. This allows for the creation of extension and extension blueprints that attach to other extensions of a particular `kind` in the same plugin, rather than needing to hardcode the exact extension ID. This is in particular useful when wanting to provide extension blueprints with a built-in heirarchy where the extensions created from one blueprint attach to extensions created from the other blueprint, for example:

```ts
// kind: 'tabbed-page'
const parentPage = TabbedPageBlueprint.make({
  params: {....}
})
// attachTo: { kind: 'tabbed-page', input: 'tabs' }
const child1 = TabContentBlueprint.make({
  name: 'tab1',
  params: {....}
})
```
