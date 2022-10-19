/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-ionicons";

import styles from "../styles";

const Login = ({ navigation }) => {
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
          keyboardType={"numeric"}
          maxLength={10}
          placeholderTextColor="black"
          inlineImageLeft=""
        />
        <TextInput
          placeholder="Password"
          style={styles.form}
          secureTextEntry={true}
          placeholderTextColor="black"
        />
        <TouchableOpacity onPress={() => console.log("Lupa akun")}>
          <Text>Lupa password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.BtnLoginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
