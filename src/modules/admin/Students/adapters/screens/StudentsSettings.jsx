import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Avatar } from '@rneui/themed';
import { Input, Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';


export default function StudentSettings({ route }) {
    const navigation = useNavigation();
    const userData = route.params?.userData || {};
    const { name, lastname, surname, curp, matricula } = userData;
    const full_lastname = `${lastname} ${surname}`;
    const [password, setPassword] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);  // Estado para el Switch

    useEffect(() => {
        if (userData) {
            navigation.setOptions({ title: `${name}` });
        }
    }, [userData]);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    return (
        <View style={styles.container}>
            <Avatar
                size={80}
                rounded
                title={name[0]}
                containerStyle={{ backgroundColor: "#052368", marginVertical: 20, borderColor: "#4480FF", borderWidth: 5 }}
            />

            <Switch
                trackColor={{ false: '#4480FF', true: '#CCCCCC' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#6B82B8"
                onValueChange={toggleSwitch}
                value={isEnabled}

            />

            <Input
                label='Nombre de usuario'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
                value={matricula}
            />

            <Input
                label='Nombre'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
                value={name}
            />

            <Input
                label='Apellidos'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
                value={full_lastname}
            />

            <Input
                label='CURP'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
                value={curp}
            />

            <Input
                label='Contraseña'
                labelStyle={styles.label}
                inputContainerStyle={styles.form}
                inputStyle={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Button
                title="Actualizar"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnStyle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    input: {
        paddingHorizontal: 6,
    },
    label: {
        color: '#6B82B8',
        fontSize: 18,
        marginStart: 30,
        fontWeight: 'bold',
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginStart: 30,
    },
    switch: {
        
    },
    btnContainer: {
        width: "78%",
        borderRadius: 10,
    },
    btnStyle: {
        backgroundColor: "#052368",
    },
});
