import {
  classNamePropDefs,
  stylePropDefs,
  type PropDef,
} from '@/utils/propDefs';

export const disclosurePropDefs: Record<string, PropDef> = {
  children: {
    type: 'enum',
    values: ['ReactNode', '(state: { isExpanded: boolean }) => ReactNode'],
  },
  defaultExpanded: {
    type: 'boolean',
    default: 'false',
  },
  isExpanded: {
    type: 'boolean',
  },
  onExpandedChange: {
    type: 'enum',
    values: ['(isExpanded: boolean) => void'],
  },
  ...classNamePropDefs,
  ...stylePropDefs,
};

export const disclosureButtonPropDefs: Record<string, PropDef> = {
  ...classNamePropDefs,
  ...stylePropDefs,
};

export const disclosurePanelPropDefs: Record<string, PropDef> = {
  ...classNamePropDefs,
  ...stylePropDefs,
};

export const disclosureUsageSnippet = `import { Disclosure, DisclosureButton, DisclosurePanel } from '@backstage/ui';

<Disclosure>
  <DisclosureButton>Toggle Panel</DisclosureButton>
  <DisclosurePanel>Your content</DisclosurePanel>
</Disclosure>`;

export const disclosureDefaultSnippet = `<Disclosure>
  <DisclosureButton>Toggle Panel</DisclosureButton>
  <DisclosurePanel>
    <Box p="4" style={{
      border: '1px solid var(--bui-border)',
      backgroundColor: 'var(--bui-bg-surface-1)',
      borderRadius: 'var(--bui-radius-2)',
      width: '460px',
    }}>
      <Text>It's the edge of the world and all of Western civilization</Text>
      <Text>The sun may rise in the East, at least it settled in a final location</Text>
      <Text>It's understood that Hollywood sells Californication</Text>
    </Box>
  </DisclosurePanel>
</Disclosure>`;

export const disclosureCustomButtonSnippet = `<Disclosure>
  <Button slot="trigger" variant="tertiary">
    Custom Toggle
  </Button>
  <DisclosurePanel>
    <Box p="4" style={{
      border: '1px solid var(--bui-border)',
      backgroundColor: 'var(--bui-bg-surface-1)',
      borderRadius: 'var(--bui-radius-2)',
      width: '460px',
    }}>
      <Text>It's the edge of the world and all of Western civilization</Text>
      <Text>The sun may rise in the East, at least it settled in a final location</Text>
      <Text>It's understood that Hollywood sells Californication</Text>
    </Box>
  </DisclosurePanel>
</Disclosure>`;

export const disclosureRenderPropsSnippet = `<Disclosure>
  {({ isExpanded }) => (
    <>
      <Button
        slot="trigger"
        variant="secondary"
        iconEnd={isExpanded ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      >
        {isExpanded ? 'Close Panel' : 'Open Panel'}
      </Button>
      <DisclosurePanel>
        <Box p="4" style={{
          border: '1px solid var(--bui-border)',
          backgroundColor: 'var(--bui-bg-surface-1)',
          borderRadius: 'var(--bui-radius-2)',
          width: '460px',
        }}>
          <Text>It's the edge of the world and all of Western civilization</Text>
          <Text>The sun may rise in the East, at least it settled in a final location</Text>
          <Text>It's understood that Hollywood sells Californication</Text>
        </Box>
      </DisclosurePanel>
    </>
  )}
</Disclosure>`;

export const disclosureDefaultExpandedSnippet = `<Disclosure defaultExpanded>
  <DisclosureButton>Toggle Panel</DisclosureButton>
  <DisclosurePanel>
    <Box p="4" style={{
      border: '1px solid var(--bui-border)',
      backgroundColor: 'var(--bui-bg-surface-1)',
      borderRadius: 'var(--bui-radius-2)',
      width: '460px',
    }}>
      <Text>It's the edge of the world and all of Western civilization</Text>
      <Text>The sun may rise in the East, at least it settled in a final location</Text>
      <Text>It's understood that Hollywood sells Californication</Text>
    </Box>
  </DisclosurePanel>
</Disclosure>`;
