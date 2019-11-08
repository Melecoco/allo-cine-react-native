import React from 'react'
import {AsyncStorage, Text, View} from 'react-native';
import {getFilmDetailFromApi} from "../API/TMDB";
import FilmList from "../components/FilmList";

class MyFilmsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			films: []
		};


		this.getFilms()
	}

	getFilms = () => {

		AsyncStorage.getItem('likes').then(async filmsLiked => {
			filmsLiked = filmsLiked.split(",");
			console.log("filmsLiked", filmsLiked);
			let tempFilms = [];
			for (const filmLiked of filmsLiked) {
				tempFilms.push(await getFilmDetailFromApi(filmLiked));
			}
			this.setState({films: tempFilms});

			console.log("this.films", this.state.films[0]);
		}).catch(err => console.log(err));

	};

	// const {navigation} = this.props;
	render() {
		const {navigation} = this.props;
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{fontSize: 30, textAlign: "center", marginBottom: 10, fontWeight: 'bold'}}> Your favorite
					films </Text>
				<FilmList navigation={navigation} films={this.state.films}/>

			</View>
		)
	}
}

export default MyFilmsPage