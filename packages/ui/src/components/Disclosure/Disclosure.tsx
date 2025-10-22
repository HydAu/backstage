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

import { forwardRef } from 'react';
import {
  Disclosure as RADisclosure,
  Button as RAButton,
  DisclosurePanel as RADisclosurePanel,
} from 'react-aria-components';
import clsx from 'clsx';
import type {
  DisclosureProps,
  DisclosureButtonProps,
  DisclosurePanelProps,
} from './types';
import { useStyles } from '../../hooks/useStyles';
import styles from './Disclosure.module.css';

/** @public */
export const Disclosure = forwardRef<
  React.ElementRef<typeof RADisclosure>,
  DisclosureProps
>(({ className, ...props }, ref) => {
  const { classNames, cleanedProps } = useStyles('Disclosure', props);

  return (
    <RADisclosure
      ref={ref}
      className={clsx(classNames.root, styles[classNames.root], className)}
      {...cleanedProps}
    />
  );
});

Disclosure.displayName = 'Disclosure';

/** @public */
export const DisclosureButton = forwardRef<
  React.ElementRef<typeof RAButton>,
  DisclosureButtonProps
>(({ className, ...props }, ref) => {
  const { classNames, cleanedProps } = useStyles('Disclosure', props);

  return (
    <RAButton
      ref={ref}
      slot="trigger"
      className={clsx(classNames.button, styles[classNames.button], className)}
      {...cleanedProps}
    />
  );
});

DisclosureButton.displayName = 'DisclosureButton';

/** @public */
export const DisclosurePanel = forwardRef<
  React.ElementRef<typeof RADisclosurePanel>,
  DisclosurePanelProps
>(({ className, ...props }, ref) => {
  const { classNames, cleanedProps } = useStyles('Disclosure', props);

  return (
    <RADisclosurePanel
      ref={ref}
      className={clsx(classNames.panel, styles[classNames.panel], className)}
      {...cleanedProps}
    />
  );
});

DisclosurePanel.displayName = 'DisclosurePanel';
