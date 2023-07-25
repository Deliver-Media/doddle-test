import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Appheader from '../Components/Appheader';
import Search from '../Components/Search';

function Home(){

  const insets = useSafeAreaInsets();

  return (
    
    <View
      style={{
        flex: 1,
        // Paddings to handle safe area
        paddingTop: Math.max(insets.top, 16),
        paddingBottom: Math.max(insets.bottom, 16),
        paddingLeft: Math.max(insets.left, 16),
        paddingRight: Math.max(insets.right, 16),
      }}
    >
      <Appheader/>
      <Search />
      <View style={contentStyles.content}>
        <Text>Home</Text>
      </View>
    </View>
    
  
  );
}

export default Home

const contentStyles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
})