import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    title:{
      fontSize: 50,
    },
    profilePic: {
      height: 200,
      width: 200,
      backgroundColor: '#000000',
      borderRadius: 150,
      overflow: 'hidden',
    },
    username:{
      fontSize: 20,
      fontWeight: '600',
    }
  });