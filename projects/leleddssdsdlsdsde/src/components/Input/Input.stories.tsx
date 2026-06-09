import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
  variant: 'Default',
};

export const Focused = Template.bind({});
Focused.args = {
  placeholder: 'placeholder',
  variant: 'Focused',
};