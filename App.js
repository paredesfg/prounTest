/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Contributors from './src/containers/contributors';
import ContributorDetails from './src/components/contributorDetails';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const MainNavigator = createStackNavigator({
  Contributors: {screen: Contributors},
  Details: {screen: ContributorDetails},
});

const App = createAppContainer(MainNavigator);



export default App;
