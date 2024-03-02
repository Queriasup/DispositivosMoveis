import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Header, ListItem, Icon } from 'react-native-elements';

export default class RelaContatos extends Component {

    render() {
        const contacts = [
            { id: '1', name: 'João', number: '123-456-7890' },
            { id: '2', name: 'Maria', number: '987-654-3210' },
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header
                     rightComponent={
                       <Icon
                         name="add"
                         type="material"
                         color="#fff"
                         onPress={() => this.props.navigation.navigate("AdicionarContato")}
                       />
                    }
                    centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff' } }}
                />
                <FlatList
                    data={contacts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ListItem bottomDivider onPress={() => this.props.navigation.navigate("InfoContato")}>
                            <Icon name="user" type="evilicon" />
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.number}</ListItem.Subtitle>
                             </ListItem.Content>
                            <ListItem.Chevron />
                         </ListItem>
                    )}
                />
            </View>
        );
    }
}
