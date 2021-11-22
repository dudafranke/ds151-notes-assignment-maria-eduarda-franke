import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CreateNoteScreen from "./src/screens/CreateNoteScreen";
import NotesDetailsScreen from "./src/screens/NotesDetailsScreen";
import EditNoteScreen from "./src/screens/EditNoteScreen";
import { NotesProvider } from "./src/context/NotesContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="NOTES" component={HomeScreen} />
          <Stack.Screen name="NEW NOTE" component={CreateNoteScreen} />
          <Stack.Screen name="NOTE'S DETAILS" component={NotesDetailsScreen} />
          <Stack.Screen name="EDIT NOTE" component={EditNoteScreen} />
          <Stack.Screen name="CONTEXT" component={NotesProvider} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
}

export default App;
