import React from 'react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  onClick: () => {},
};

export const Hover = Template.bind({});
Hover.args = {
  label: 'Label',
  onClick: () => {},
};

export const Pressed = Template.bind({});
Pressed.args = {
  label: 'Label',
  onClick: () => {},
};
Pressed.decorators = [
  (Story) => {
    return <div className="bg-gray-700 p-4">
      <Story />
    </div>;
  },
];