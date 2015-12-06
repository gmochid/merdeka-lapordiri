'use strict';

import React from 'react-native';
import Home from './src/Home';
import Confirmation from './src/Confirmation';

var {
  AppRegistry,
  Navigator
} = React;

class LaporDiri extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Lapor Diri', index: 0}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if (route.index == 0) {
            return <Home navigator={navigator} route={route}/>;
          } else {
            return <Confirmation navigator={navigator} route={route}/>;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('LaporDiri', () => LaporDiri);
