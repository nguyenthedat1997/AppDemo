/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React,{Component} from 'react';
import Home from './components/HomeScreen';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allreducers from './reducers';
import countcontainer from './containers/countcontainer';

let store = createStore(allreducers);
const App = ()=>{
    
        <Provider store = {store}>
            <countcontainer/>
        </Provider>
        
};
AppRegistry.registerComponent(appName, () => App);
