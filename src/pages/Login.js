/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';

import styles from '../styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image />
      </View>
      <View>
        <Text style={styles.h1}>Login Mahasiswa</Text>
        <Text style={styles.h2}>Masukkan Nim dan Password</Text>
        <TextInput
          placeholder="Nim"
          style={styles.form}
          keyboardType={'numeric'}
          maxLength={10}
        />
        <TextInput
          placeholder="Password"
          style={styles.form}
          secureTextEntry={true}
        />
        <Text onPress={() => console.log('Lupa akun')}>Lupa password?</Text>
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => console.log('Sendika Anjing')}>
          <Text style={styles.BtnLoginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
