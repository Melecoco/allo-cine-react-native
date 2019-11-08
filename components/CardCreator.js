import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements'
import LikeButton from "./LikeButton";


export default class CardCreator extends React.Component {


	// const classes = useStyles()
	// const [liked, setLiked] = useState(false);

	constructor(props) {
		super(props);

	}

	render() {
		let {poster, title, id} = this.props;

		return (
			<Card>
				<View style={style.card}>
					<Image style={{flex: 1}} resizeMode="stretch" source={{uri: poster}}/>
					<View style={style.view}>
						<Text style={style.text}> {title}</Text>

						{/**
						 *  The second string on this ternaire isn't empty, there is an emoji on it
						 */
						}
						<LikeButton id={id}/>

						{/**
						 * isOnly To Log
							<Button title={"log"} onPress={() => {
								AsyncStorage.getItem('likes').then((likesFromStorage) => {
									console.log(id, likesFromStorage)
								}).catch(error => console.log(error))
							}}/>
						 */}
					</View>
				</View>
			</Card>
		);
	}
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
		text: {fontSize: 20, textAlign: "center", marginTop: 9},
		view: {
			width: "100%",
			flexDirection: "row",
			justifyContent: "space-around"
		}
	}
);