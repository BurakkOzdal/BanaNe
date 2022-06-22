import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from "@react-native-firebase/auth";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

//pages
import Login from './pages/auth/Login'
import Sign from './pages/auth/Sign'
import Messages from './pages/Messages'
import FlashMessage from 'react-native-flash-message';
import colors from './styles/colors';

const Stack = createNativeStackNavigator();

const App = () => {

  const [userSession, setUserSession] = useState(null);


  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user)
    })
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      {
        !userSession ? (
          <AuthStack />
        )
          : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='MessagesPage' component={Messages} options={{ headerShown: true, title: "dertler", headerTitleAlign: "center", headerTintColor: colors.blue, headerTitleStyle: { fontSize: 25 }, headerRight:()=><Icon onPress={()=>auth().signOut()} name='logout' color={colors.blue} size={30}/> } } />
            </Stack.Navigator>
          )
      }
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};


export default App;
