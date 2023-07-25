import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import welcomeStyles from '../assets/styles/welcomeStyles';



function Welcome({ navigation }) {
  return (
    <View style={welcomeStyles.container}>
      <Image source={require('../assets/images/Doddle-Text-Icon.png')}/>
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