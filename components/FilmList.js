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
						// className = 'card'
						title={film.title}
						// releaseYear = {film.releaseYear}
						// synopsis = {film.synopsis}
						poster={getPosterFromApi(film.poster)}

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