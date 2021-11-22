import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, Ionicons, Entypo } from '@expo/vector-icons';
import { NotesContext } from "../context/NotesContext";

const Note = ({ props, color, navigation }) => {

    const notesContext = useContext(NotesContext);

    let estilo = [styles.note]  .concat(color == 1 ? [styles.pink] : [])
                                .concat(color == 2 ? [styles.salmon] : [])
                                .concat(color == 3 ? [styles.purple] : [])
                                .concat(color == 4 ? [styles.blue] : [])
                                .concat(color == 5 ? [styles.green] : [])
                                .concat(color == 6 ? [styles.pink] : [])
                                .concat(color == 7 ? [styles.salmon] : [])
                                .concat(color == 8 ? [styles.purple] : [])
                                .concat(color == 9 ? [styles.blue] : [])
                                .concat(color == 10 ? [styles.green] : [])

    return (
        <View style={estilo}>
            <Text style={styles.pin} >
                <Entypo name="pin" size={35} color="#d10404" />  
            </Text>
            <View style={styles.texts}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.content}>
                    {props.content}
                </Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress = {() => navigation.navigate("EDIT NOTE", {
                        id: props.id
                    })}
                >
                    <Feather name="edit" size={26} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => notesContext.deleteNote(props.id)}
                >
                    <Ionicons name="ios-trash-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    note: {

        width: 165,
        height: 165,

        marginTop: 20,
        marginBottom: 30,
        padding: 10,

        elevation: 15,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.3,



    },

    pink: {
        backgroundColor: '#fcccff'
    },

    salmon: {
        backgroundColor: '#ffcccc'
    },

    purple: {
        backgroundColor: '#ccccff'
    },

    blue: {
        backgroundColor: '#cce8ff'
    },

    green: {
        backgroundColor: '#ccffe5'
    },

    pin: {
        alignSelf: 'center',

        marginTop: -28,
        marginBottom: 5,
        marginLeft: 20,

        shadowOpacity: 2,
        textShadowRadius: 6,
        textShadowOffset: { width: 1, height: 3 },

    },

    texts: {
        alignItems: 'center',
        height: '70%',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    content: {
        fontSize: 15,
        alignSelf: 'flex-start',

        paddingTop: 10,
    },

    buttons: {
        flexDirection: 'row',

        justifyContent: 'space-between',
        alignItems: 'center',
    }
    
});

export default Note;