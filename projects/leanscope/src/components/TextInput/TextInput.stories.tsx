import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current field value.',
    },
    label: {
      control: 'text',
      description: 'Visible label for the field.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether interaction is disabled.',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Semantic value-change callback owned by the slot.',
    },
    inputType: {
      control: 'select',
      options: ['text', 'email', 'password', 'url'],
      description: 'Semantic HTML input type derived from schema format.',
    },
    placeholder: {
      control: 'text',
      description: 'Optional placeholder text.',
    },
    maxLength: {
      control: 'text',
      description: 'Optional maximum character count from schema maxLength.',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Whether the field should request focus after mount.',
    },
    errorMessage: {
      control: 'text',
      description: 'First validation error message, when present.',
    },
  },
  args: {
    value: '',
    label: 'Label',
    disabled: false,
    inputType: 'text',
    placeholder: 'Placeholder',
    maxLength: undefined,
    autoFocus: false,
    errorMessage: undefined,
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    label: 'Label',
  },
};

export const Email: Story = {
  args: {
    value: '',
    label: 'Email',
    inputType: 'email',
    placeholder: 'Enter email',
  },
};

export const Password: Story = {
  args: {
    value: '',
    label: 'Password',
    inputType: 'password',
    placeholder: 'Enter password',
  },
};

export const Disabled: Story = {
  args: {
    value: 'Disabled value',
    label: 'Disabled Input',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    value: 'Invalid value',
    label: 'Error Input',
    errorMessage: 'This field is invalid',
  },
};