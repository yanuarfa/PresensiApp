/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  h2: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  form: {
    padding: 12,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
  },
  LoginButton: {
    display: 'flex',
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnLoginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
