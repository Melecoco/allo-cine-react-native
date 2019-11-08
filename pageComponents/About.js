import React from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Card} from 'react-native-elements'
import CardCreator from '../components/CardCreator';
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
				<Text><Text> Présentation du groupe, </Text>
					Welcome to the jungle !
				</Text>



                    <Card>

                          <Text style={{marginBottom: 10, fontWeight: 'bold', textAlign:"center", fontSize:30}} > Melec </Text>
                          <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize:15}} >  25 ans</Text>
                          <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize:15}}> Docteur en science de la vie, masseur à temps partiel. </Text>

                    </Card>

                    <Card>

                          <Text style={{marginBottom: 10, fontWeight: 'bold', textAlign:"center", fontSize:30}} > BEN. B E N </Text>
                          <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize:15}} >  25 ans </Text>
                          <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize:15}}> Putain, la biére c'est la vie aprés Javascripte. </Text>

                    </Card>

                    <Card>

                          <Text style={{marginBottom: 10, fontWeight: 'bold', textAlign:"center", fontSize:30}} > Boubou</Text>
                          <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize:15}} >  25 ans</Text>
                          <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize:15}}>  Travailler c'est la vie, il faut manger, boire, courir, danser, blablater quoiooio.
                          </Text>

                    </Card>


            </View>
		)
	}
}

export default About