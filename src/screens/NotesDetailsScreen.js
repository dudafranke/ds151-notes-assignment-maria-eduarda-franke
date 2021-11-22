import React, { useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { NotesContext } from "../context/NotesContext";

const NotesDetailsScreen = ({ navigation, route }) => {

  const notesContext = useContext(NotesContext);

  const id = route.params.id;
  const index = notesContext.getIndex(id);
  const title = notesContext.notes[index].title;
  const content = notesContext.notes[index].content;

return (
  <View style={styles.root}>
    <View style={styles.note}>
      <View style={styles.opacity}></View>
      <Text style={styles.date}>November 15th, 2021 - 10 a.m.</Text>
      <Text style={styles.title}>TITLE </Text>
      <TextInput 
        editable = {false}
        placeholder = {title}
        placeholderTextColor = 'black'
        style={styles.titleInput}
      />
      <Text style={styles.content}>CONTENT</Text>
      <TextInput 
        editable = {false}
        multiline
        placeholder = {content}
        placeholderTextColor = 'black'
        style={styles.contentInput}  
      />
    </View>
    <View style={styles.editNoteButton}>
      <Button
        title = 'Edit Note' 
        color = 'black'
        onPress = {() => navigation.navigate("EDIT NOTE", {
          id: id
        })}
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

  opacity: {
    width: '65%',
    height: 40, 
    alignSelf: 'center',

    backgroundColor: 'lightgray',
    opacity: 0.5,
  },

  date: {
    position: 'absolute',
    alignSelf: 'center',

    padding: 10,
    paddingHorizontal: 15,

    fontSize: 15,

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

export default NotesDetailsScreen;