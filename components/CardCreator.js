import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const style = StyleSheet.create({
    card: {
        height: 100,
        width: 300,
        margin: 5,
        
    },
    color: {
        height: 80,
        backgroundColor: 'red'
    }  
    }
)

export default function CardCreator(props) {

    // const classes = useStyles()
    const {data} = props

    return (
        <Card >
            <View style = {style.card}>
                <View style={style.color}></View>
                <Text>{data['title']}</Text>
                
            </View>
        </Card>
    );
    
    
}