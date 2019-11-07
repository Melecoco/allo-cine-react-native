import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,  Button} from 'react-native';
import CardCreator from '../components/CardCreator'
import FilmList from './../components/FilmList'
const HomePage = (props) => {
    const {navigation} = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen HELLO</Text>
            <FilmList></FilmList>
        </View>

    )
}
export default HomePage