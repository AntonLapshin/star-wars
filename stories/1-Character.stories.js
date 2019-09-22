import React from 'react';
import { action } from '@storybook/addon-actions';
import { Character } from 'components';

export default {
  title: 'Character'
};

export const Default = () => {
  return <Character name={'Luke Skywalker'} onClick={action(`clicked`)} />;
};

export const Active = () => {
  return <Character name={'Luke Skywalker'} isSelected={true} onClick={action(`clicked`)} />;
};
