import React from 'react';
import { action } from '@storybook/addon-actions';
import { Search } from '../src/components/Search/Search';

export default {
  title: 'Search'
};

export const Default = () => {
  return <Search value={'Text'} onChange={action(`changed`)} />;
};

export const Empty = () => {
  return <Search value={''} onChange={action(`changed`)} />;
};

class AppLive extends React.PureComponent {
  state = {
    value: 'Test'
  };

  constructor() {
    super();
  }

  updateValue = newValue => {
    this.setState({
      value: newValue
    });
  };

  render() {
    return <Search value={this.state.value} onChange={this.updateValue} />;
  }
}

export const Live = () => <AppLive />;
