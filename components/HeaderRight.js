import {Button, View} from "react-native";
import React from "react";

const HeaderRight = (props) => {
	const {navigation} = props;
	return (
		<View>
			<Button title="About" onPress={() => navigation.navigate("About")}/>
		</View>
	
	)
};

export default HeaderRight