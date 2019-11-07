import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,  Button} from 'react-native';

const HomePage = (props) => {
    const {navigation} = props

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen HELLO</Text>
        </View>
    )
}

export default HomePage