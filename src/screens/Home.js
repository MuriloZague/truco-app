import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Points from '../components/Points';

export default function Home() {
 return (
   <View style={styles.container}>
      <View style={styles.points}>
          <Text style={styles.text}>Nós</Text>
          <Text style={styles.text}>Eles</Text>
      </View>
      <Points/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  points: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 65,
    padding: 35,
    fontWeight: 'bold',
  },
  textPoint: {
    fontSize: 90,
    textAlign: 'center',
    marginHorizontal: 70,
    marginBottom: 80,
  },
})