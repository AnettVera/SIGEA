import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed';
import { Input } from '@rneui/base';


export default function Settings() {
  const admin=
  {
    name:'Sebastian',
    lastname:'Sota',
    surname:'Garcia',
    curp:'SOGA970629HMMRRBE3'
  }
  const full_lastname = `${admin.lastname} ${admin.surname}`;
  const username=`${admin.name}_${admin.lastname}`
  return (

    <View style={styles.container}>
      <Avatar
        size={80}
        rounded
        title={admin.name[0]}
      containerStyle={{ backgroundColor: "#052368", marginVertical:20 , borderColor: "#4480FF", borderWidth: 5}}
      />

      <Text style={styles.name}>{admin.name}</Text> 
      

      <Input 
  label='Nombre de usuario'
  labelStyle={styles.label} 
  inputContainerStyle={styles.form}
  inputStyle={styles.input}
 value={username}
 editable={false}
/>


  <Input 
    label='Nombre'
    labelStyle={styles.label}
    inputContainerStyle={styles.form}
    inputStyle={styles.input}
    value={admin.name}
    editable={false} 
  />

  <Input 
    label='Apellidos'
    labelStyle={styles.label}
    inputContainerStyle={styles.form}
    inputStyle={styles.input}
    value={full_lastname}
    editable={false}
  />

  <Input 
    label='CURP' 
    labelStyle={styles.label}
    inputContainerStyle={styles.form}
    inputStyle={styles.input}
    value={admin.curp}
    editable={false}
  />
  
  <Input 
    label='Contraseña'
    labelStyle={styles.label} 
    inputContainerStyle={styles.form}
    inputStyle={styles.input}
  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
    marginVertical:20,
  },
  input: {
    paddingHorizontal:6,
    justifyContent: 'center',
  },
  label:{
    color: '#6B82B8',
    fontSize:18,
    marginStart: 30,
    fontWeight: 'bold',
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginStart: 30,
  },
})


