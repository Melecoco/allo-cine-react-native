import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements'

const style = StyleSheet.create({
		card: {
			height: 300,
			width: 300,
			margin: 5
		},
		color: {
			height: 80,
			backgroundColor: 'red'
		}
	}
);

export default function CardCreator(props) {

	// const classes = useStyles()
	const {title, poster} = props;
	return (
		<Card>
			<View style={style.card}>
				<Image style={{flex:1}} resizeMode="stretch" source={{uri: poster}}/>
				<Text style={{fontSize:20, textAlign:"center", marginTop: 9}}> {title}</Text>
			</View>
		</Card>
	);


}