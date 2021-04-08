import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import LoginForm from '../component/LoginForm';
import DaftarAkun from '../component/DaftarAkun';

export default function Login() {
    return (
      <View style={styles.content}>

        <ScrollView>
            <Text style={styles.header}>Masuk</Text>
            
            <LoginForm />

            <View style={styles.line}></View>

            <DaftarAkun />

        </ScrollView>


      </View>
    );
}

const styles = StyleSheet.create({
  content: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#964F38',
    paddingBottom: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  holder: {
    fontSize: 21,
    color: '#000000',
    paddingLeft: 5,
    marginBottom: 2,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    color: '#fff',
    borderColor: '#b0c4de',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 10,
  },
  term: {
    flexDirection: 'row',
    width: '90%',
  },
  buttonRegis: {
    marginVertical: 20,
    backgroundColor: '#964F38',
    borderRadius: 10,   
  },
  regisText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
  },
  line: {
      borderBottomColor: '#C4C4C4',
      borderBottomWidth: 1,
      marginVertical: 20,
  },
});