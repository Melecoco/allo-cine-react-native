import {getMostPopularFilms} from "../API/TMDB";
import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native';
import FilmList from './../components/FilmList'
import Searcher from '../components/Searcher'

const HomePage = (props) => {
	const {navigation} = props;

	const [films, setFilms] = useState(0);

	// useEffect(()  => {
    //     getMostPopularFilms().then(newFilms =>{ setFilms(newFilms)})
	// });

	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text h1>Home Screen HELLO</Text>
			<Searcher onComplete={setFilms}/>
			<FilmList navigation={navigation} films={films}/>
		</View>
	)
};
export default HomePage