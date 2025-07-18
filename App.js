import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { StatusBar } from 'expo-status-bar';
// dependencies
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ExpProvider } from './components/ExpContext.js';
// screens
import Splash from './screens/Splash';
import Welcome from './screens/Welcome.js';
import SignUp from './screens/SignUp';
import Login from './screens/Login.js';
import Home from './screens/Home.js';
import AddExp from './screens/AddExp.js'

const Stack = createNativeStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    }, []);

  return (
      <ExpProvider>
          <NavigationContainer>
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {loading ? (
                      <Stack.Screen name="Splash" component={Splash} />
                    ) : (
                      <>
                        <Stack.Screen name="Welcome" component={Welcome} />
                        <Stack.Screen name='Login' component={Login} />
                        <Stack.Screen name='SignUp' component={SignUp} />
                        <Stack.Screen name='AddExp' component={AddExp} options={{ title: 'Add Expense' }} />
                        <Stack.Screen name='Home' component={Home} />
                      
                      </>
                    )}
                  </Stack.Navigator>
                </NavigationContainer>
      </ExpProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
