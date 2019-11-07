import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements'
import {getPosterFromApi} from "../API/TMDB";


const data = {
              "id": 417384,
              "poster": "/f0GiRCqW3fMby4uIfBVajOnZjpn.jpg",
              "releaseYear": "2019-08-21",
              "synopsis": "Dans un manoir abandonné, un groupe de jeunes trouve un livre qui raconte des histoires terrifiantes. Mais cette trouvaille n’est pas sans conséquence : la lecture du livre permet à ses effroyables créatures de prendre vie… La petite ville va alors faire face à une vague de morts particulièrement atroces, et chacun devra affronter ses pires peurs pour sauver les habitants et arrêter ce carnage.",
              "title": "Scary stories",
             };

const style = StyleSheet.create({
		card: {
			height: 200,
			width: 300,
			margin: 5,

		},
		color: {
			height: 80,
		}
	}
);



const DetailFilmPage = (props) => {
    const {navigation} = props;
    //const {films} = props;
    return (


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Card>

            <Image style={{width: "100%", height: "50%"}} source={{uri:getPosterFromApi(data.poster)}}/>

            <Text style={{marginBottom: 10, fontWeight: 'bold'}} > Titre : {data.title} </Text>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}} > Date de sortie :  {data.releaseYear} </Text>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}> Synopsis : </Text>
            <Text style={{marginBottom: 10}}> {data.synopsis} </Text>

              <Button
                icon={<Icon name='code' color='#ffffff' />}

                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Like' />

            </Card>

        </View>
    )
}
export default DetailFilmPage

