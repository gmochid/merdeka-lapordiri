'use strict';

import React from 'react-native';

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#FF0000',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
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

export default styles;
