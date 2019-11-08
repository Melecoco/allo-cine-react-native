import {getMostPopularFilms} from "../API/TMDB";
import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native';
import FilmList from './../components/FilmList'
import Searcher from '../components/Searcher'
import HeaderRight from '../components/HeaderRight'

let isHomeScreenHaventAlreadyLoaded = true;

class HomePage extends React.Component{

   static navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <HeaderRight
          navigation={navigation}
        />
      ),
    };
  };

    constructor(props){
        super(props);
        this.state= {
            films: [],
        }
    };


    componentDidMount(){
        if (isHomeScreenHaventAlreadyLoaded) {
			isHomeScreenHaventAlreadyLoaded = false;
			getMostPopularFilms().then(newFilms => {
                this.setState({films: newFilms})
			});
		}
    }
    // setFilms = (e) => {
    //     this.setState({films: e})
    // }
render(){
    const {navigation} = this.props
    const films = this.state.films

    return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
			<Text h1 style={{fontSize:30, textAlign:"center", marginBottom: 10, fontWeight: 'bold'}}>Welcome ! </Text>
			<Searcher onComplete={(e) => this.setState({films: e})}/>
			<FilmList navigation={navigation} films={films}/>
		</View>
	)
}
	
};
export default HomePage