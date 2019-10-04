import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import ContributorList from '../components/contributor_list';


class Contributors extends Component {
    static navigationOptions = {
        title: 'Contributors',
      };

    render(){
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.contribTitle}>Contributors List</Text>
                <ContributorList navigation={ this.props.navigation }/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    contribTitle: {
        flex: 1,
        alignItems: 'center',
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: '#535353',
        textAlign: 'center',
        backgroundColor: '#f2eff8',
      },
});


export default Contributors;