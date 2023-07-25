import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './pages/Home';
import Welcome from './pages/welcome';
import Settings from './pages/Settings';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
  },
};

function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: 'black',
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Documents') {
            iconName = focused ? 'documents' : 'documents-outline';
          }
          else if (route.name === 'Upload') {
            return <View style={appStyles.centerButton} >
              <Ionicons name={'close-sharp'} size={30} color={'black'} style={{transform: [{rotate: '45deg'}]}} />
              </View>;
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
      })}
    >
      <Tab.Screen
        name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Documents" component={Settings}
        options={{
          tabBarLabel: 'Documents',
        }}
      />
      <Tab.Screen
        name="Upload" component={Settings}
        style={{transform: [{rotateY: '10deg'}]}}
        options={{
          tabBarLabel: () => null,
        }}
        
      />
      <Tab.Screen
        name="Profile" component={Settings}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="Settings" component={Settings}
        options={{
          tabBarLabel: 'Settings',
        }}
      />

    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    <SafeAreaProvider >
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NavBar"
            component={NavBar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
    </>
  );
}

const appStyles = StyleSheet.create({
  centerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10, 
    width: '70%',
    marginTop: 10,
  },
});
