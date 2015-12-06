'use strict';

import React from 'react-native';
import Login from './Login';
import styles from './Styles';

var {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
} = React;

var Home = React.createClass({
  _onNext: function() {
    this.props.navigator.push({
      name: 'FeedView',
      index: this.props.route.index + 1
    });
  },
  _onBack: function() {
    this.props.navigator.pop();
  },
  render: function() {
    var backButton = null;
    if (this.props.route.index > 0) {
      backButton =
        <TouchableHighlight onPress={this._onBack}>
          <View>
            <Text>Back</Text>
          </View>
        </TouchableHighlight>
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.route.name}
        </Text>
        <Text style={styles.instructions}>
          Index number {this.props.route.index}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableHighlight onPress={this._onNext}>
          <View>
            <Text>Next</Text>
          </View>
        </TouchableHighlight>
        {backButton}
      </View>
    );
  }
});

export default Home;
