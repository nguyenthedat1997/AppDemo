/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React,{Component} from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allreducers from './reducers';
import MainTask from './components/MainTask';

let store = createStore(allreducers);
const App = ()=>(
        <Provider store = {store}>
            <MainTask/>
        </Provider>
);
    
AppRegistry.registerComponent(appName, () => App);
