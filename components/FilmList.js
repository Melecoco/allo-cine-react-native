import React from 'react'
import CardCreator from './CardCreator';
import {ScrollView, Text} from 'react-native';
import {getPosterFromApi} from "../API/TMDB";


const data = [{
	id: '1',
	title: 'bonjour',
	image: 'blabla'
},
	{
		id: '2',
		title: 'au revoir',
		image: 'blabla'
	},
	{
		id: '3',
		title: 'héhéhaha',
		image: 'blabla'
	},
	{
		id: '4',
		title: 'héhé',
		image: 'blabla'
	},
	{
		id: '4',
		title: 'héhé',
		image: 'blabla'
	},
	{
		id: '4',
		title: 'héhé',
		image: 'blabla'
	},
	{
		id: '4',
		title: 'héhé',
		image: 'blabla'
	}
];

//import {Link} from "react-router-dom";
//import {getPosterFromApi} from './../API/TMDB'

export default function FilmList(props) {

	const {films} = props;

	const cardCreation = () => {
		return (films ? films.map(film => {
				return (
					<CardCreator
						key={film.id}
						// id = {film.id}
						// className = 'card'
						title={film.title}
						// releaseYear = {film.releaseYear}
						// synopsis = {film.synopsis}
						poster={getPosterFromApi(film.poster)}

					/>

				)
			}
		) : <Text>Chargement..</Text>)

	};


	return (
		<ScrollView>
			{cardCreation()}
		</ScrollView>)
}