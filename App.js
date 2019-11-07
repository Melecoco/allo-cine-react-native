import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomePage from './pageComponents/HomePage'
import MyFilmsPage from './pageComponents/MyFilmsPage'
import DetailFilmPage from './pageComponents/DetailFilmPage'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import About from "./pageComponents/About";
import {Button} from "react-native";


const AppNavigator = createStackNavigator(
	{
		Home: HomePage,
		MyFilms: MyFilmsPage,
		DetailFilm: DetailFilmPage,
		About: About
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: "Awesome Movies",

			/* ToDo: Implement headerRight to active navigation
			-> Cant use navigate whereas createStackNavigator isn't launch.
			-> Don't want to implement it manually for each view
			-> Cant use bottomNav and stackNav
				headerRight: () => <HeaderRight/>,
			 */
			headerRight: () => (
				<Button
					onPress={() => alert('This is a button!')}
					title="About"
				/>),
			headerStyle: {
				backgroundColor: '#000000',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	}
);

const TabNavigator = createBottomTabNavigator({
	Home: HomePage,
	Settings: MyFilmsPage,
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
	render() {
		return <AppContainer/>;
	}
}
