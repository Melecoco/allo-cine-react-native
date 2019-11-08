import React from 'react'
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements'
import {getPosterFromApi} from "../API/TMDB";

const DetailFilmPage = (props) => {
	const {navigation} = props;
	const film = props.navigation.getParam("film");
	return (

		<ScrollView>
			<Image style={{width: "100%", height: "100%"}} resizeMode='contain'
				   source={{uri: getPosterFromApi(film.poster ? film.poster : film.poster_path)}}/>

			<Text style={{fontSize:30, textAlign:"center", marginBottom: 10, fontWeight: 'bold'}}> {film.title} </Text>
			<Text style={{marginBottom: 10, fontWeight: 'bold'}}> Synopsis : </Text>
			<Text style={{marginBottom: 10}}> {film.synopsis ? film.synopsis : film.overview} </Text>
			<Text style={{marginBottom: 10, fontWeight: 'bold'}}> Date de sortie : {film.releaseYear ? film.releaseYear : film.release_date} </Text>

			<Button
				icon={<Icon name='code' color='#ffffff'/>}

				buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
				title='Like'/>
		</ScrollView>
	)
};

export default DetailFilmPage

