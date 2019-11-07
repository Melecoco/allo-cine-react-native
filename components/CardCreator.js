import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements'

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
);

export default function CardCreator(props) {

	// const classes = useStyles()
	const {title, poster} = props;
	return (
		<Card>
			<View style={style.card}>
				<Image style={{width: "100%", height: "100%"}} source={{uri: poster}}/>

				<Text>{title}</Text>

			</View>
		</Card>
	);


}