'use strict';

import React from 'react-native';
import Home from './src/Home';

var {
  AppRegistry,
  Navigator
} = React;

class LaporDiri extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          return <Home navigator={navigator} route={route}/>;
        }}
      />
    );
  }
}

AppRegistry.registerComponent('LaporDiri', () => LaporDiri);
