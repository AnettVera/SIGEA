import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Input } from '@rneui/base'

export default function MultiAnswer() {
    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text>Primera pregunta?</Text>

            </View>
            <View style={styles.input}>

                <TextInput
                    placeholder='Escribe tu respuesta...'
                    placeholderTextColor='#6b7288'
                    style={styles.inputControl}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 5,
        marginVertical: 10,

    },
    question: {

    },
    answer: {
        backgroundColor: '#E4EAF8'
    },
    input: {
        marginBottom: 5,
        alignItems: 'left',
        textAlign: 'left'
    },
    inputControl: {
        borderWidth: 2,
        height: 44,
        borderColor: '#f2f2f2',
        backgroundColor: '#E4EAF8',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 16,
        fontWeight: '500',
        color: '#222',
        marginTop: 10,
    }
})