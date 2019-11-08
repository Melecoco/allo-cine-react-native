import React from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Card} from 'react-native-elements'
import {getPosterFromApi} from "../API/TMDB";

const DetailFilmPage = (props) => {
	const {navigation} = props;
	const film = props.navigation.getParam("film");
	return (




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
	)
};

export default DetailFilmPage

