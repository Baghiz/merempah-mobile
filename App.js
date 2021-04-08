import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Detail from './app/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
        <Detail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    // paddingHorizontal: 30,
  },
  // content: {
  //   width: '100%',
  //   backgroundColor: '#fff',
  //   padding: 40,
  //   borderRadius: 30,
  // }
});
