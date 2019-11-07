import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,  Button} from 'react-native';
import CardCreator from '../components/CardCreator'
import FilmList from '../components/FilmList'
import Searchbar from '../components/Searchbar'


const HomePage = (props) => {

    const {navigation} = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Searchbar></Searchbar>
            <Text>HomePage</Text>
            <FilmList></FilmList>
        </View>

    )
}
export default HomePage