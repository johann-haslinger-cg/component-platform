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
};

export const Hovered = Template.bind({});
Hovered.args = {
  label: 'Button',
};

export const Pressed = Template.bind({});
Pressed.args = {
  label: 'Button',
};
// To simulate the pressed state in storybook, you would need to modify your stories accordingly.