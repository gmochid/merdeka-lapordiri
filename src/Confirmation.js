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

var Confirmation = React.createClass({
  _onBack: function() {
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Confirmation</Text>
        <TouchableHighlight onPress={this._onBack}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

export default Confirmation;
