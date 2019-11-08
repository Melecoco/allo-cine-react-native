import {Button} from "react-native";
import React from "react";

const HeaderRight = (props) => {
	const {navigation} = props;

	return (<Button title="Icon" onPress={navigation.navigate("About")}/>)
};

export default HeaderRight