import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import Points from '../components/Points';
import NameWe from '../components/modal/NameWe';
import NameThey from '../components/modal/NameThey';

export default function Home() {

  const [we, setWe] = useState('Nós');
  const [they, setThey] = useState('Eles')
  const [modalVisibleWe, setModalVisibleWe] = useState(false);
  const [modalVisibleThey, setModalVisibleThey] = useState(false);

  const handleSave = (newWe) => {
    setWe(newWe);
    setModalVisibleWe(false);
  };

  const handleSaveThey = (newThey) => {
    setThey(newThey);
    setModalVisibleThey(false);
  }

 return (
   <View style={styles.container}>
      <View style={styles.points}>
        <View style={styles.textWe}>
        <TouchableOpacity onPress={() => setModalVisibleWe(true)} activeOpacity={0.7}>
          <Text style={styles.text}>{we}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.textThey}>
        <TouchableOpacity onPress={() => setModalVisibleThey(true)} activeOpacity={0.7}>
          <Text style={styles.text}>{they}</Text>
        </TouchableOpacity>
        </View>
      </View>
      <Points/>
      <Modal visible={modalVisibleWe} animationType="fade" transparent={true} >
            <NameWe we={we} handleSave={handleSave} handleClose={ () => setModalVisibleWe(false) } />
      </Modal>
      <Modal visible={modalVisibleThey} animationType="fade" transparent={true} >
            <NameThey they={they} handleSaveThey={handleSaveThey} handleClose={ () => setModalVisibleThey(false) } />
      </Modal>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  points: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textWe: {
    maxWidth: '55%',
    flexWrap: 'wrap'
  },
  textThey: {
    maxWidth: '55%',
    flexWrap: 'wrap'
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 50,
    padding: 30,
    fontWeight: 'bold',
  },
  textPoint: {
    fontSize: 90,
    textAlign: 'center',
    marginHorizontal: 70,
    marginBottom: 80,
  },
})