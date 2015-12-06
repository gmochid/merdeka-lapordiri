'use strict';

import React from 'react-native';
import styles from './Styles';

var {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} = React;

var Home = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      passportNumber: '',
      address: '',
    };
  },
  _onSubmit: function() {
    this.props.navigator.push({
      name: 'FeedView',
      index: this.props.route.index + 1
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.route.name}
        </Text>
        <Text>
          Nama
        </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({name:text})}
          value={this.state.name}
          />
        <Text>
          Nomor Passport
        </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({passportNumber:text})}
          value={this.state.passportNumber}
          />
        <Text>
          Tempat Tinggal
        </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({address:text})}
          value={this.state.address}
          />
        <TouchableHighlight onPress={this._onSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

export default Home;
