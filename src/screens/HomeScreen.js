import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Note from '../components/Note';
import AddNoteButton from '../components/AddNoteButton';
import { NotesContext } from "../context/NotesContext";

const HomeScreen = ({ navigation }) => {

    const notesContext = useContext(NotesContext);

    function addColor() {
        const min = Math.ceil(1);
        const max = Math.floor(6);
        const color = Math.floor(Math.random() * (max - min)) + min;
        return(color);
    }

    return (
        <View style={styles.root}>
            <View style={styles.top}>
                <AddNoteButton
                    onPress = {() => navigation.navigate("NEW NOTE")}
                />
            </View>

            <FlatList
                numColumns={2}
                data = {notesContext.notes}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => {
                    return (
                        <View style={styles.content}>
                            <TouchableOpacity
                                onPress = {() => navigation.navigate("NOTE'S DETAILS", {
                                    id: item.id
                                })}
                            >
                                <Note
                                    props = {item}
                                    color = {addColor()}
                                    navigation = {navigation}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({

root: {

    flex: 1,
    flexDirection: 'column',

    backgroundColor: '#ffffcc',

},

top: {
    flexDirection: 'row',
    justifyContent: 'center',
},

content: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
},  

});

export default HomeScreen;