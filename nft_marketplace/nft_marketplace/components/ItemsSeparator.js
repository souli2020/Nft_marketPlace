import React from 'react'

import{View} from 'react-native'
import colors from '../constants/colors'

export default function ItemsSeparator(){

  return(
    <View style={{width:'100%', height:10, backgroundColor:colors.white}}></View>
  )
}