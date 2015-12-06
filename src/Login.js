'use strict';

import React from 'react-native';
import styles from './Styles';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var Login = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
      </View>
    );
  }
});

export default Login;
