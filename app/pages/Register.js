import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Regform from '../component/Regform';
import HaveAccount from '../component/HaveAccount';

export default function Register() {
    return (
      <View style={styles.content}>

        <ScrollView>
            <Text style={styles.header}>Daftar</Text>
            
            <Regform />

            <View style={styles.line}></View>

            <HaveAccount />
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
  line: {
      borderBottomColor: '#C4C4C4',
      borderBottomWidth: 1,
      marginVertical: 20,
  },
});
