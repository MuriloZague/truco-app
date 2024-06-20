import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function NameWe({ handleClose, handleSave, we }) {
  const [newWe, setNewWe] = useState(we);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>
          Alterar Nome
        </Text>
        <TextInput
          style={styles.input}
          value={newWe}
          onChangeText={setNewWe}
        />
        <View style={styles.btns}>
        <TouchableOpacity style={styles.button} onPress={() => handleSave(newWe)}>
          <Text style={styles.buttonText}>
            Salvar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleClose}>
          <Text style={styles.buttonText}>
            Cancelar
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  container: {
    backgroundColor: 'rgba(24, 24, 24, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '80%',
    backgroundColor: '#fafafafa',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    fontSize: 17,
    textAlign: 'center',
    backgroundColor: '#fafafafa',
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});