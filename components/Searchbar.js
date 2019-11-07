import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements'

const style = StyleSheet.create({
    card: {
        width: 300,
    },
    color: {
        height: 70,
    }
    }
)
export default function Searchbar()
{

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };


    const { search } = this.state;

    return (
    <Card >
    <View style = {style.card}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    </View>
    </Card>
    );

}