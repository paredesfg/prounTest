import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import Api from '../../utils/api';
import ItemContributor from './item-contributor';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

class ContributorList extends Component{
    keyExtractor = item => item.login;
    renderEmpty = () => <Empty text="Busqueda vacía" />;
    itemSeparator = () => <View
                            style={{
                            backgroundColor: '#aaaaaa',
                            height: 1,
                            }}
                        />;
    
    constructor(props){
        super(props);
        this.state = {
            contributorsSource: [],
        }
    }
    
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
    };

    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit = async () => {
        const contributors = await Api.getContributors()
        .then((contributors) => {
            this.setState({
                contributorsSource: contributors,
            });
            this.persistData(contributors);
        })
        .catch(() => {
            Toast.show('Error obteniendo datos de contributors', Toast.SHORT);
        });
    };

    renderEmpty = () => {
        return <Text>Lista de contributors vacia</Text>;
    };

    async persistData(contribData){
        await AsyncStorage.setItem('contributors', JSON.stringify(contribData))
        .then(() => {
            console.log("Datos almacenados correctamente");
        })
        .catch(() => {
            Toast.show('Error al almacenar datos', Toast.SHORT);
        });
    }
    
    renderItem = item => {
        if(item.login){
            return <ItemContributor 
            {...item} 
            key={item.login} 
            onPress={() => {
                this.viewContributor(item);
            }}
            />;
        }
    };

    viewContributor = item => {
        this.props.navigation.navigate('Details', {url: item.url});      
      };

    render(){
        return(
            <View>
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.contributorsSource}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={({item}) => this.renderItem(item)}
            />
            </View>
        );
    }
}

export default ContributorList;