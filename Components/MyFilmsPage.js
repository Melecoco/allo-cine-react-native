import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,  Button} from 'react-native';

const MyFilmsPage = (props) => {
    const {navigation} = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MyFilms</Text>
        </View>
    )
}
export default MyFilmsPage