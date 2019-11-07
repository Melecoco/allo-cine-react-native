import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomePage from './components/HomePage'
import DetailFilmPage from './components/DetailFilmPage'
import MyFilmsPage from './components/MyFilmsPage'

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
