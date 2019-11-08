import React from 'react'
import {Image, ScrollView, Text} from 'react-native';
import {getPosterFromApi} from "../API/TMDB";

const DetailFilmPage = (props) => {
	const {navigation} = props;
	const film = navigation.getParam("film");
	return (

		<ScrollView>
			<Image style={{width: "100%", height: "100%"}} resizeMode='contain'
				   source={{uri: getPosterFromApi(film.poster ? film.poster : film.poster_path)}}/>

			<Text
				style={{fontSize: 30, textAlign: "center", marginBottom: 10, fontWeight: 'bold'}}> {film.title} </Text>
			<Text style={{marginBottom: 10, fontWeight: 'bold'}}> Synopsis : </Text>
			<Text style={{marginBottom: 10}}> {film.synopsis ? film.synopsis : film.overview} </Text>
			<Text style={{marginBottom: 10, fontWeight: 'bold'}}> Date de sortie
				: {film.releaseYear ? film.releaseYear : film.release_date} </Text>
		</ScrollView>);
	{/*

		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <Card>

                    <Image style={{width: "100%", height: "50%"}} source={{uri:getPosterFromApi(film.poster)}}/>

                    <Text style={{marginBottom: 10, fontWeight: 'bold', textAlign:"center", fontSize:30}} > {film.title} </Text>
                    <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize:15}} > Date de sortie :  {film.releaseYear} </Text>
                    <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize:15}}> Synopsis : </Text>
                    <ScrollView>
                    <Text style={{marginBottom: 10,textAlign:"center"}}> {film.synopsis} </Text>
                    </ScrollView>
                      <Button
                        icon={<Icon name='code' color='#ffffff' />}

                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Like' />

                    </Card>

                </View>
*/}


};

export default DetailFilmPage;

