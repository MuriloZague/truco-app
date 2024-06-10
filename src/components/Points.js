import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Points() {
  const navigation = useNavigation();

  const [points1, setPoints1] = useState(0)
  const [points2, setPoints2] = useState(0)
  const [winner1, setWinner1] = useState(0)
  const [winner2, setWinner2] = useState(0)


  useEffect(() => {
    if (points1 >= 12) {
      setWinner1(winner1 + 1)
      setPoints1(0);
      setPoints2(0);
      navigation.navigate('Winner');
    } else if (points2 >= 12) {
      setWinner2(winner2 + 1)
      setPoints1(0);
      setPoints2(0);
      navigation.navigate('Winner');
    }
  }, [points1, points2]);


 return (
   <View style={styles.container}>
      <View style={styles.points}>
        <Text style={styles.pointsText}>{points1}</Text>
        <Text style={styles.pointsText}>{points2}</Text>
    </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btnMinus} 
          onPress={() =>{ 
            if(points1 > 0){
            setPoints1(points1 - 1)}
            }}>
            <Text style={styles.textBtn}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMinus} 
          onPress={() =>{
             if(points2 > 0){
              setPoints2(points2 - 1)}
            }}>
            <Text style={styles.textBtn}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setPoints1(points1 + 1)}>
            <Text style={styles.textBtn}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setPoints2(points2 + 1)}>
            <Text style={styles.textBtn}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setPoints1(points1 + 3)}>
            <Text style={styles.textBtn}>+3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setPoints2(points2 + 3)}>
            <Text style={styles.textBtn}>+3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setPoints1(points1 + 6)}>
            <Text style={styles.textBtn}>+6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setPoints2(points2 + 6)}>
            <Text style={styles.textBtn}>+6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setPoints1(points1 + 9)}>
            <Text style={styles.textBtn}>+9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setPoints2(points2 + 9)}>
            <Text style={styles.textBtn}>+9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.victory}>

        <Text style={styles.textWin}>{winner1}</Text>
        <Text style={styles.textWin}>Vitórias</Text>
        <Text style={styles.textWin}>{winner2}</Text>

      </View>
   </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  points: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  pointsText: {
    fontSize: 110,
    fontWeight: 'bold',
    marginBottom: 45,
  },
  btnMinus: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: 50,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 5,
    margin: 5,
  },
  btn: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 50,
    padding: 12,
    borderRadius: 5,
    margin: 5,
  },
  btns: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    marginHorizontal: 5,
  },
  victory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 40,
  },
  textWin: {
    fontSize: 25,
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  }
})