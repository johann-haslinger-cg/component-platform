import React from 'react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};

export const Hover = Template.bind({});
Hover.args = {
  label: 'Label',
};

export const Pressed = Template.bind({});
Pressed.args = {
  label: 'Label',
};
Pressed.parameters = {  // Custom styles for Pressed state
  backgrounds: { value: 'rgba(255, 255, 255, 0.050)' },
};