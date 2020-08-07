import React from 'react';
import { View, Text, Image } from 'react-native';

const App = () => {
  return (
      <View style={{alignItems:'center'}}>
        <Text>I Love My Cat</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
  );
}

export default App;