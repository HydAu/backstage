/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Disclosure, DisclosureButton, DisclosurePanel } from './Disclosure';
import { Button } from '../Button';
import { Box } from '../Box';
import { Text } from '../Text';
import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react';

const meta = {
  title: 'Backstage UI/Disclosure',
  component: Disclosure,
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

const contentStyles = {
  border: '1px solid var(--bui-border)',
  backgroundColor: 'var(--bui-bg-surface-1)',
  color: 'var(--bui-fg-primary)',
  borderRadius: 'var(--bui-radius-2)',
  width: '460px',
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 'var(--bui-space-2)',
  alignItems: 'center',
};

export const Default: Story = {
  render: () => (
    <Disclosure style={containerStyles}>
      <DisclosureButton>Toggle Panel</DisclosureButton>
      <DisclosurePanel>
        <Box p="4" style={contentStyles}>
          <Text as="p">
            It's the edge of the world and all of Western civilization
          </Text>
          <Text as="p">
            The sun may rise in the East, at least it settled in a final
            location
          </Text>
          <Text as="p">
            It's understood that Hollywood sells Californication
          </Text>
        </Box>
      </DisclosurePanel>
    </Disclosure>
  ),
};

export const CustomButton: Story = {
  render: () => (
    <Disclosure style={containerStyles}>
      <Button slot="trigger" variant="tertiary">
        Custom Toggle
      </Button>
      <DisclosurePanel>
        <Box p="4" style={contentStyles}>
          <Text as="p">
            It's the edge of the world and all of Western civilization
          </Text>
          <Text as="p">
            The sun may rise in the East, at least it settled in a final
            location
          </Text>
          <Text as="p">
            It's understood that Hollywood sells Californication
          </Text>
        </Box>
      </DisclosurePanel>
    </Disclosure>
  ),
};

export const RenderProps: Story = {
  render: () => (
    <Disclosure style={containerStyles}>
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
            <Box p="4" style={contentStyles}>
              <Text as="p">
                It's the edge of the world and all of Western civilization
              </Text>
              <Text as="p">
                The sun may rise in the East, at least it settled in a final
                location
              </Text>
              <Text as="p">
                It's understood that Hollywood sells Californication
              </Text>
            </Box>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  ),
};

export const DefaultExpanded: Story = {
  render: () => (
    <Disclosure defaultExpanded style={containerStyles}>
      <DisclosureButton>Toggle Panel</DisclosureButton>
      <DisclosurePanel>
        <Box p="4" style={contentStyles}>
          <Text as="p">
            It's the edge of the world and all of Western civilization
          </Text>
          <Text as="p">
            The sun may rise in the East, at least it settled in a final
            location
          </Text>
          <Text as="p">
            It's understood that Hollywood sells Californication
          </Text>
        </Box>
      </DisclosurePanel>
    </Disclosure>
  ),
};
