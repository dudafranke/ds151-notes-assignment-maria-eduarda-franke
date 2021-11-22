import React, { useState, useContext } from 'react';
import { StyleSheet,  View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { NotesContext } from "../context/NotesContext";

const CreateNoteScreen = ({ navigation }) => {

  function handlePress(title, content) {
    notesContext.createNote(title, content);
    navigation.navigate("NOTES");
  }

  const notesContext = useContext(NotesContext);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

return (
    <View style={styles.root}>
      <View style={styles.note}>
          <Text style={styles.title}>TITLE</Text>
          <TextInput 
            autoCapitalize ='none'
            autoCorrect = {false}

            style={styles.titleInput}

            value={title}
            
            onChangeText={(t) => setTitle(t)}
          />
          <Text style={styles.content}>CONTENT</Text>
          <TextInput 
            autoCapitalize = 'none'
            autoCorrect = {false}
            multiline

            style={styles.contentInput}

            value={content}
            
            onChangeText={(t) => setContent(t)}
          />
        </View>
        <View style={styles.createNoteButton}>
          <Button
            title = 'Create Note' 
            color = 'black'
            onPress = {() => handlePress(title, content)}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

  root: {

    flex: 1,
    flexDirection: 'column',

    backgroundColor: '#ffffcc',

  },

  note: {
    height: '90%'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',

    padding: 10,
    paddingLeft: 20,

  },

  content: {
    fontSize: 15,
    fontWeight: 'bold',

    padding: 10,
    paddingLeft: 20,

  },

  titleInput: {

    alignSelf: 'center',
    textAlign: 'center',

    borderWidth: 1,

    width: '90%',
    padding: 10,

    backgroundColor: 'white',
    fontSize: 20,
    
  },

  contentInput: {

    alignSelf: 'center',
    textAlign: 'left',

    borderWidth: 1,

    width: '90%',
    padding: 10,

    backgroundColor: 'white',
    fontSize: 15,

  },

  createNoteButton: {

    alignSelf: 'center',
    width: "50%",

  },

});

export default CreateNoteScreen;