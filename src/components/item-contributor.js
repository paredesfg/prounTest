import React, { Component } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class ItemContributor extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Image style={{width: 40, height: 40,}}
                    source={{ uri: this.props.avatar_url}}
                />
                <View style={styles.loginView}>
                    <Text style={styles.contribTitle}> 
                        {this.props.login} 
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 5
    },
    contribTitle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4a4a4a'
    },
    loginView:{
        padding: 10,
    }
})
export default ItemContributor;