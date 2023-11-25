import type { Meta, StoryObj } from '@storybook/react';

import { Sample } from './Sample';

const meta: Meta<typeof Sample> = {
  component: Sample,
};

export default meta;

type Story = StoryObj<typeof Sample>;

export const Default: Story = {
  args: {
    name: 'John',
    age: 30,
  },
};
