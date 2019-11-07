import React, {useState} from 'react'
import {AsyncStorage, Button, Image, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements'


export default function CardCreator(props) {

	// const classes = useStyles()
	const [liked, setLiked] = useState(false);
	let {title, poster, id} = props;

	id = id.toString();
	let arraysLikes;

	AsyncStorage.getItem('likes').then((likes) => {
		arraysLikes = likes ? likes.split(",") : [];
		if (arraysLikes.includes(id)) setLiked(true);
	});

	return (
		<Card>
			<View style={style.card}>
				<Image style={{flex: 1}} resizeMode="stretch" source={{uri: poster}}/>
				<View>
					<Text style={style.text}> {title}</Text>

					{/**
					 *  The second string on this ternaire isn't empty, there is an emoji on it
					 */
					}
					<Button title={liked ? "❤️" : "💙"} onPress={() => {

						/**
						 * Role of this  button :
						 *
						 * ->  Like / unlike a movie,
						 * -> Set the hooks
						 */
						console.log("like", id);

						if (arraysLikes.includes(id)) {
							if (arraysLikes.includes(id)) {
								const indexOfId = arraysLikes.findIndex(like => like === id);
								arraysLikes.splice(indexOfId, 1);
							}
							console.log("notLiked", arraysLikes);
							setLiked(false);
						} else {
							arraysLikes.push(id);
							setLiked(true);
							console.log("liked", arraysLikes)
						}

						const stringSent = arraysLikes.length ? arraysLikes.toString() : "";
						console.log({stringSent});
						AsyncStorage.setItem('likes', stringSent).catch(error => console.log("settingItem", error))

					}}/>

					{/**
					 * isOnly To Log
					 */}
					<Button title={"log"} onPress={() => {
						AsyncStorage.getItem('likes').then((likesFromStorage) => {
							console.log(id, likesFromStorage)
						}).catch(error => console.log(error))
					}}/>
				</View>
			</View>
		</Card>
	);
}

const style = StyleSheet.create({
		card: {
			height: 300,
			width: 300,
			margin: 5
		},
		color: {
			height: 80,
			backgroundColor: 'red'
		},
		text: {fontSize: 20, textAlign: "center", marginTop: 9}
	}
);