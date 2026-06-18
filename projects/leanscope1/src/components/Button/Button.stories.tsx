import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Visible text for the button.',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'neutral'],
      description: 'Semantic button emphasis.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Semantic button size.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether interaction is disabled.',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is waiting on work triggered by the host app.',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Whether the button should request focus after mount.',
    },
    onPress: {
      action: 'pressed',
      description: 'Semantic activation callback owned by the proxy component.',
    },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    autoFocus: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Neutral: Story = {
  args: {
    label: 'Button',
    variant: 'neutral',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
    loading: true,
  },
};