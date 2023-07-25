import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const Appheader = () => {

  const navigation = useNavigation();

  var date = new Date();
  var hours = date.getHours();
  let greetingMessage = '';

  if (hours < 12) {
    greetingMessage = "Good Morning";
  } else if (hours < 18) {
    greetingMessage = "Good Afternoon";
  } else {
    greetingMessage = "Good Evening";
  }

  const Username = 'Reece';

  return (
    <View style={appHeaderStyles.header}>
    <View>
        <Text style={appHeaderStyles.headerText} >{greetingMessage}, {Username}!</Text>
    </View>
    <TouchableOpacity style={appHeaderStyles.backButtonCon} onPress={() => navigation.goBack()}>
      <View style={appHeaderStyles.backButton}>
        <Ionicons name="chevron-back" size={20}></Ionicons>
        <Text style={appHeaderStyles.backButtonText} >Back</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}


export default Appheader

const appHeaderStyles = StyleSheet.create({
  header: {
    flex: 1,
    maxHeight: 70,
  },
  headerText: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  backButtonCon:{
    flex: 1,
    maxHeight: 30,
    paddingTop: 15
  },
  backButton:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20
  }
});
