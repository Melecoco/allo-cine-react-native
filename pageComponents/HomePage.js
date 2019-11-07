import {getMostPopularFilms} from "../API/TMDB";
import React, {useState, useEffect} from 'react'
import {Text, View} from 'react-native';
import FilmList from './../components/FilmList'
import Searchbar from '../components/Searchbar'
const HomePage = (props) => {
	const {navigation} = props;

	const [films, setFilms] = useState(0);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Searchbar></Searchbar>
            <Text>HomePage</Text>
            <FilmList></FilmList>
        </View>

	useEffect(()  => {
        getMostPopularFilms().then(newFilms =>{ setFilms(newFilms)})
	});

	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Home Screen HELLO</Text>
			<FilmList films={films}/>
		</View>

	)
};
export default HomePage