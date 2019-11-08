import React from "react";
import {AsyncStorage, Button} from "react-native";

export default class LikeButton extends Button {
	constructor(props) {
		super(props);
		this.state = {
			liked: false
		};

		AsyncStorage.getItem('likes').then(
			(likes) => {
				const arraysLikes = likes ? likes.split(",") : [];
				if (arraysLikes.includes(this.props.id)) this.setState({liked: true});
			}
		);
	}

	OnPressLiked = async () => {
		let {id} = this.props,
			arraysLikes,
			likes = await AsyncStorage.getItem('likes');

		arraysLikes = likes ? likes.split(",") : [];
		if (arraysLikes.includes(id)) this.setState({liked: true});


		if (arraysLikes.includes(id)) {
			if (arraysLikes.includes(id)) {
				const indexOfId = arraysLikes.findIndex(like => like === id);
				arraysLikes.splice(indexOfId, 1);
			}
			this.setState({liked: false});
		} else {
			arraysLikes.push(id);
			this.setState({liked: true});
		}

		const stringSent = arraysLikes.length ? arraysLikes.toString() : "";
		AsyncStorage.setItem('likes', stringSent).catch(error => console.log("settingItem", error))

	};

	render() {
		return (<Button title={this.state.liked ? "❤️" : "💙"} onPress={() => {
			this.OnPressLiked().then().catch(err => console.log({err}))
		}}/>)
	}
}