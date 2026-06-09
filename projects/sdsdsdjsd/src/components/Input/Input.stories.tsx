import React from 'react';
import Input, { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'Default',
  placeholder: 'placeholder',
};

export const Focused = Template.bind({});
Focused.args = {
  state: 'Focused',
  placeholder: 'placeholder',
};