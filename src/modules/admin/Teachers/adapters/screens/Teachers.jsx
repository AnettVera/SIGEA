import { StyleSheet, ScrollView, FlatList, View, SafeAreaView } from 'react-native';
import React from 'react';
import { ListItem, SearchBar, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import ListUsers from './components/ListTeachers';

export default function Teachers() {
  const navigation = useNavigation();

  const goToTeachersSettings = (userData) => {
    navigation.navigate('TeachersSettings', { userData });
  };
  
  const users = [
    {
      id: 1,
      name: 'José Alberto',
      lastname: 'García',
      surname: 'Muñoz',
      curp: 'VECA040828MBCRRNA6',
    }, {
      id: 2,
      name: 'Araceli',
      lastname: 'Jacoco',
      surname: 'Martinez',
      curp: 'VIEL040124MBCRRNA6',
    }, {
      id: 17,
      name: 'Derick Axel ',
      lastname: 'Launes',
      surname: 'Ramirez',
      curp: 'VIEL040124MBCRRNA6',
    },{
      id: 3,
      name: 'Miguel Angel',
      lastname: 'Moreno',
      surname: 'Snachez',
      curp: 'MAVV040830HBCRRNA6',
    }, {
      id: 4,
      name: 'Erick',
      lastname: 'Mireles',
      surname: 'Merchant',
      matricula: '20223TN048',
      curp: 'DIPC040124MBCRRNA6',
    }, {
      id: 5,
      name: 'Hugo',
      lastname: 'Alejandrez',
      surname: 'Snachez',
      matricula: '20223TN055',
      curp: 'GORM041212HBCRRNA6',
    }, {
      id: 6,
      name: 'Enna Rubi',
      lastname: 'Perez',
      surname: 'Sandoval',
      matricula: '20223TN057',
      curp: 'HEBJ040729MBCRRNA6',
    }, {
      id: 7,
      name: 'Mario',
      lastname: 'Nava',
      surname: 'Montes',
      matricula: '20223TN139',
      curp: 'ORMM040605MBCRRNA6',
    }, {
      id: 8,
      name: 'Edvard',
      lastname: 'Sethidian',
      surname: 'Castaneda',
      matricula: '20223TN040',
      curp: 'HEBJ040729MBCRRNA6',
    }, {
      id: 9,
      name: 'Bernar',
      lastname: 'Huicochea',
      surname: 'Naranjo',
      curp: 'HEBJ040729MBCRRNA6',
    }, {
      id: 10,
      name: 'Abril',
      lastname: 'Vera',
      surname: 'Carbajal',
      curp: 'VECA040729MBCRRNA6',
    }, {
      id: 11,
      name: 'Ximena',
      lastname: 'Vera',
      surname: 'Carbajal',
      curp: 'VECX040729MBCRRNA6',
    }, {
      id: 12,
      name: 'Mareidy Jopseline',
      lastname: 'Vera',
      surname: 'Carbajal',
      curp: 'VECM040729MBCRRNA6',
    }, {
      id: 14,
      name: 'Edgar Raciel',
      lastname: 'Garcia',
      surname: 'Cruz',
      curp: 'VECM040729MBCRRNA6',
    }

  ]

  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.cont}
        inputContainerStyle={styles.contInput}
        lightTheme={true}
        placeholder="Buscar docente por nombre"
      />
      <SafeAreaView style={styles.contList}>
        <FlatList
          data={users}
          renderItem={({ item }) =>
            <ListUsers
              name={item.name}
              lastname={item.lastname}
              surname={item.surname}
              curp={item.curp}
              onPress={() => goToTeachersSettings(item)}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>


    </View>
  );
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignContent: 'center',
      backgroundColor: "#fff",
    },
    cont: {
      backgroundColor: '#fff',
    },
    contInput: {
      backgroundColor: '#f9f9f9'
    },
    contList: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 10,
    }


});