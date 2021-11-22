import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddNoteButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity
            onPress = {() => onPress()}
        >
          <AntDesign name="addfile" size={24} color="black" style={{textAlign: 'center'}}/>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>NEW NOTE</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {

    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',

    width: "50%",
    marginBottom: 30,
    paddingTop: 5,
    paddingBottom: 5,

    elevation: 25,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.3,
    
  },
  
});

export default AddNoteButton;