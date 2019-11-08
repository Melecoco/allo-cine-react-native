import React from 'react'
import {Text, View} from "react-native";

class About extends React.Component {

	static navigationOptions = {
		title: 'About',
	};

	constructor(props) {
		super(props);
		const {navigation} = props;
	}

	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text h1 style={{fontSize: 30, textAlign: "center", marginBottom: 10, fontWeight: 'bold'}}>
					Welcome !
				</Text>
			</View>
		)
	}
}

export default About