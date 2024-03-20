import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import MultiAnswer from '../components/MultiAnswer'
import OpenAnswer from '../components/OpenAnswer'

export default function Exam() {
  return (
    <ScrollView style={styles.container}>
     <View >
      <OpenAnswer></OpenAnswer>
      <MultiAnswer></MultiAnswer>
     </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
container:{
backgroundColor:'#fff',
padding:5,

},
cont:{
  backgroundColor:'#f9f9f9',
  padding:5,
  margin:'auto',
  flex:1
}

})