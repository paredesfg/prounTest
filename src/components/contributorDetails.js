import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Api from '../../utils/api';
import Toast from 'react-native-simple-toast';



class ContributorDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            contributorDetails: [],
        }
    }
    static navigationOptions = {
        title: 'Contributor Details',
      };

    componentDidMount() {
        this.handleSubmit();
    }
    

    handleSubmit = async () => {
        const contributors = await Api.getContributorDetails(this.props.navigation.getParam('url'))
        .then((contributors)=> {
            this.setState({
                contributorDetails: contributors,
            });
        })
        .catch(()=>{
            Toast.show('Error al obtener datos de Contributor', Toast.SHORT);
        });
    };
  
    render(){
        const { navigation } = this.props;
        return(
            <View style={styles.container}>
                <Image style={{width: '100%', height: 250,}}
                    source={{ uri: this.state.contributorDetails.avatar_url}}
                />
                <View style={styles.descContainer}>
                    <View style={styles.rowTable}>
                        <Text style={styles.title}>LOGIN</Text>
                        <Text style={styles.textOk}>{this.state.contributorDetails.login}</Text>
                    </View>
                    <View style={styles.rowTable}>
                    <Text style={styles.title}>NOMBRE</Text>
                        <Text style={styles.textOk}>{this.state.contributorDetails.name}</Text>
                    </View>
                    <View style={styles.rowTable}>
                        <Text style={styles.title}>EMAIL</Text>
                        <Text style={this.state.contributorDetails.email ? styles.textOk : styles.textError}>{this.state.contributorDetails.email ? this.state.contributorDetails.email : 'NO TIENE'}</Text> 
                    </View>
                </View>
            </View>
        );
    }


}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 7,
        paddingBottom: 7,
        alignItems: 'center'
    },
    descContainer:{

    },
    textError:{
        color: '#ff0000',
        paddingLeft:10,
        fontSize: 16,
    } ,
    textOk:{
        color: '#494949',
        fontSize: 16,
        paddingLeft:10
    } ,
    title:{
        color: '#494949',
        fontSize: 16,
        paddingLeft:10,
        width: 80,
    } ,
    rowTable:{
        flexDirection: 'row',
        padding: 5,
    }
});

export default ContributorDetails;