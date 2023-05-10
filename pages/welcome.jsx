import React from 'react';
import { Button, Text, View } from 'react-native';
import welcomeStyles from '../assets/styles/welcomeStyles';


function Welcome({ navigation }) {
  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.title}>Doodle Test!</Text>
      <View style={welcomeStyles.profilePic}></View>

      <View>
        <Text style={welcomeStyles.username}>Welcome Back, Username</Text>
      </View>
      <View>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('NavBar') }
      />
      </View>
    </View>
  )
}



export default Welcome