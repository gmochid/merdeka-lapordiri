'use strict';

import React from 'react-native';
import LaporDiri from './src/LaporDiri';

var {
  AppRegistry,
  Navigator
} = React;

class app extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          return <LaporDiri navigator={navigator} route={route}/>;
        }}
      />
    );
  }
}

AppRegistry.registerComponent('LaporDiri', () => app);
