import React from 'react';
import {View,Text} from 'react-native';

 class App extends React.Component{
  render(){
    return(
      <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Text>I Love My Dog</Text>
      </View>
    )
  }
}
export default App;