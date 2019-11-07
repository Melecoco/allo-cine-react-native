import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomePage from './pageComponents/HomePage'
import MyFilmsPage from './pageComponents/MyFilmsPage'
import DetailFilmPage from './pageComponents/DetailFilmPage'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator(
  {
  Home: HomePage,
  MyFilms: MyFilmsPage,
  DetailFilm: DetailFilmPage
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
