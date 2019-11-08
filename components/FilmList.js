import React from 'react'
import CardCreator from './CardCreator';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {getPosterFromApi} from "../API/TMDB";

export default function FilmList(props) {

	const {films, navigation} = props;

	const cardCreation = () => {
		return (films
			? films.map(film => (
				<TouchableOpacity
					key={film.id}
					onPress={() => navigation.navigate('DetailFilm', {film})
					}
				>
					<CardCreator
						key={film.id}
						id = {film.id.toString()}
						title={film.title}
						poster={getPosterFromApi(film.poster ? film.poster : film.poster_path)}

					/>
				</TouchableOpacity>
			))
			: <Text>Chargement..</Text>)
	};


	return (
		<ScrollView>
			{cardCreation()}
		</ScrollView>)
}