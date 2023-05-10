import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Settings() {
    const insets = useSafeAreaInsets();

  return (
    
    <View
    style={{
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',

      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}
  >
    <View>
      <Text>Settings</Text>
    </View>
  </View>
  )
}

export default Settings