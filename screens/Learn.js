import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { firebase } from '../firebase'

const App = () => {
 const screenWidth = Dimensions.get('window').width;


 const [words, setUsers] = useState([]);
 const todoRef = firebase.firestore().collection('words');

 useEffect(async () => {
     todoRef
     .onSnapshot(
         querySnapshot => {
             const words = []
             querySnapshot.forEach((doc) => {
                 const {ingilizce, turkce} = doc.data()
                 words.push({
                     id: doc.id,
                     ingilizce,
                     turkce,

                 })
             })
             setUsers(words)
         }
     )
 }, [])

 return (

  <SafeAreaView style={styles.container}>
  {words.length > 0 && (
    <FlipCard
      style={[styles.card, { width: screenWidth - 50 }]}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      onFlipEnd={() => console.log('Card flipped')}
      onFlipStart={() => console.log('Card flip starting')}
      clickable={true}
    >
      <View style={[styles.cardContent, styles.frontCard]}>
        <Text style={styles.cardText}>{words[1].ingilizce}</Text>
      </View>
      <View style={[styles.cardContent, styles.backCard]}>
        <Text style={styles.cardText}>{words[1].turkce}</Text>
      </View>
    </FlipCard>
  )}

  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
      <Icon name="check" size={33} color="#178F3F" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Icon name="times" size={33} color="#EE4562" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Icon name="heart" size={30} color="#B145EE" regular />
    </TouchableOpacity>
  </View>
</SafeAreaView>

 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9EF'
 },
 card: {
    flex:1,
    paddingTop: 57,
    width: 301,
    height: 407

 },
 cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
 },
 frontCard: {
  backgroundColor: '#80CA64',
 },
 backCard: {
  backgroundColor: '#80CA64'
 },
 cardText: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'Montserrat-ExtraBold'
 },
 buttonContainer: {
  flexDirection: 'row', // Yatay düzen
  justifyContent: 'space-between', // Butonlar arasında boşluk bırak
  paddingHorizontal: 20, // Yatay kenar boşluğu
  marginBottom: 150
},
button: {
  backgroundColor: '#FFEDB7',
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderRadius: 20,
  margin: 15
},
buttonText: {
  
  fontWeight: 'bold',
},
});

export default App;