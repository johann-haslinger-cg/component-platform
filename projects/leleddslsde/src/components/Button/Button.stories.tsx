import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

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