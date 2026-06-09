import React from 'react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  variant: 'Default',
};

export const Hovered = Template.bind({});
Hovered.args = {
  label: 'Button',
  variant: 'Hovered',
};

export const Pressed = Template.bind({});
Pressed.args = {
  label: 'Button',
  variant: 'Pressed',
};