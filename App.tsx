import { View, Text } from 'react-native'
import React from 'react'
import colors from './src/theme/colors'
import fonts from './src/theme/fonts'
const App = () => {
  return (
    <View style={{flex:1 , alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:colors.primary, fontSize:fonts.size.lg} }>Hello Word</Text>
    </View>
  )
}

export default App