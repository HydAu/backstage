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

import type {
  DisclosureProps as RADisclosureProps,
  ButtonProps as RAButtonProps,
  DisclosurePanelProps as RADisclosurePanelProps,
} from 'react-aria-components';

/**
 * Props for the Disclosure component.
 * @public
 */
export interface DisclosureProps extends RADisclosureProps {
  className?: string;
}

/**
 * Props for the DisclosureButton component.
 * @public
 */
export interface DisclosureButtonProps extends RAButtonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Props for the DisclosurePanel component.
 * @public
 */
export interface DisclosurePanelProps extends RADisclosurePanelProps {
  className?: string;
}
