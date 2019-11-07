import React from 'react'
import {StyleSheet, View} from 'react-native';
import {Card, SearchBar} from 'react-native-elements'
import {getFilmsFromApiWithSearchedText} from "../API/TMDB";

const style = StyleSheet.create({
		card: {
			width: 300,
		},
		color: {
			height: 70,
		}
	}
);
export default class Searcher extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			typing: ""
		}
	}

	updateSearch = async (inputValue) => {
		this.setState({typing: inputValue});
		this.props.onComplete(await getFilmsFromApiWithSearchedText(inputValue))
	};

	render() {
		return (
			<Card>
				<View style={style.card}>
					<SearchBar
						placeholder="Type Here..."
						onChangeText={(keyword) => this.updateSearch(keyword)}
						value={this.state.typing}
					/>
				</View>
			</Card>
		);

	}

}