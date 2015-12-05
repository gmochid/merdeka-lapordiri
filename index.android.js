'use strict';

import React from 'react-native';
import LaporDiri from './src/LaporDiri';

var {
  AppRegistry,
} = React;

class app extends React.Component {
  render() {
    return (
      <LaporDiri/>
    );
  }
}

AppRegistry.registerComponent('LaporDiri', () => app);
