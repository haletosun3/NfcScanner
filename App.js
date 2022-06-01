import {ActivityIndicator} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Login from './NfcScanner/Screen/Login/Login';
import ReadNDEF from './NfcScanner/Screen/ReadNDEF/ReadNDEF';
import TagDetails from './NfcScanner/Screen/TagDetails/TagDetails';
import ForgotPass from './NfcScanner/Screen/ForgotPassword/ForgotPassword';
const Stack = createStackNavigator();

const App = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  return (
    <NavigationContainer>
      {
      isAuthLoading ?
      (
        <ActivityIndicator size={'large'} color={'black'} />
      ) :
      !userSession ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="ReadNDEF" component={ReadNDEF} />
          <Stack.Screen name="TagDetails" component={TagDetails} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
