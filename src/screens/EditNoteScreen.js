import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet,  View, Text, TextInput, Button } from 'react-native';
import { NotesContext } from "../context/NotesContext";

const EditNoteScreen = ({ navigation, route }) => {

  function handlePress(id, t, c) {
    notesContext.editNote(id, t, c)
    navigation.navigate("NOTES");
  }

  const notesContext = useContext(NotesContext);

  const id = route.params.id;
  const index = notesContext.getIndex(id);
  const title = notesContext.notes[index].title;
  const content = notesContext.notes[index].content

  const [t, setTitle] = React.useState(`${title}`);
  const [c, setContent] = React.useState(`${content}`);

return (
    <View style={styles.root}>
      <View style={styles.note}>
          <Text style={styles.title}>TITLE</Text>
          <TextInput 
            autoCapitalize ='none'
            autoCorrect = {false}

            style={styles.titleInput}

            value={t}
            
            onChangeText={(t) => setTitle(t)}
          />
          <Text style={styles.content}>CONTENT</Text>
          <TextInput 
            autoCapitalize = 'none'
            autoCorrect = {false}
            multiline

            style={styles.contentInput}

            value={c}
            
            onChangeText={(t) => setContent(t)}
          />
        </View>
        <View style={styles.editNoteButton}>
          <Button
            title = 'Save Note' 
            color = 'black'
            onPress = {() => handlePress(id, t, c)}
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

  editNoteButton: {

    alignSelf: 'center',
    width: "50%",

  },

});

export default EditNoteScreen;