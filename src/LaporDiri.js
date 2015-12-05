'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var LaporDiri = React.createClass({
  _onNext: function() {
    this.props.navigator.push({
      name: 'FeedView',
      component: LaporDiri,
      index: 1
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
          To get started, edit index.ios.js
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default LaporDiri;
