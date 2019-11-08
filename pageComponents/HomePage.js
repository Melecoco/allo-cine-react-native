import {getMostPopularFilms} from "../API/TMDB";
import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native';
import FilmList from './../components/FilmList'
import Searcher from '../components/Searcher'
import HeaderRight from '../components/HeaderRight'

let isHomeScreenHaventAlreadyLoaded = true;
const HomePage = (props) => {
	/* ToDo add Title on page
	static navigationOptions = {
		title: 'Home',
	};
	*/
	const {navigation} = props;
	const [films, setFilms] = useState(0);

	useEffect(() => {
		if (isHomeScreenHaventAlreadyLoaded) {
			isHomeScreenHaventAlreadyLoaded = false;
			getMostPopularFilms().then(newFilms => {
				setFilms(newFilms)
			});
		}
	});

	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
            <HeaderRight navigation={navigation}></HeaderRight>
			<Text h1 style={{fontSize:30, textAlign:"center", marginBottom: 10, fontWeight: 'bold'}}>Welcome ! </Text>
			<Searcher onComplete={setFilms}/>
			<FilmList navigation={navigation} films={films}/>
		</View>
	)
};
export default HomePage