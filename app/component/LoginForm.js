import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';

export default function LoginForm() {
    return (
      <View>
        <Text style={styles.holder}>Nama Pengguna/Nomor HP</Text>
        <TextInput style={styles.textinput} placeholder="Nama Pengguna/Nomor HP" underlineColorAndroid={'transparent'} />

        <Text style={styles.holder}>Kata Sandi</Text>
        <TextInput style={styles.textinput} placeholder="Kata Sandi" secureTextEntry={true} underlineColorAndroid={'transparent'} />

        <View style={styles.term}>
            <CheckBox title='Click Here'/>
            <Text>Ingat Saya</Text>
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  holder: {
    fontSize: 16,
    color: '#000000',
    paddingLeft: 5,
    marginBottom: 2,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    color: '#909090',
    borderColor: '#b0c4de',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 10,
  },
  term: {
    flexDirection: 'row',
    width: '90%',
    alignItems:'center',
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#964F38',
    borderRadius: 10,   
  },
  buttonText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
  },
});
