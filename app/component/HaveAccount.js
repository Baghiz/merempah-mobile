import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HaveAccount() {
    return (
      <View>
        <Text style={styles.textExplanation}>Atau jika kamu sudah memiliki akun, silahkan klik tombol dibawah ini!</Text>
        <TouchableOpacity style={styles.buttonBorder}>
            <Text style={styles.buttonBorderText}>Masuk</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  textExplanation: {
      textAlign: 'center',
      fontSize: 14,
  },
  buttonBorder: {
      borderColor: '#964F38',
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 20,
  },
  buttonBorderText: {
      color: '#964F38',
      textAlign: 'center',
      paddingVertical: 10,
  }
});
