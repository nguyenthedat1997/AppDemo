import React, {Component} from 'react';
import {View} from 'react-native';
import Addtaskcontainer from '../containers/Addtaskcontainer';
import TaskListcontainer from '../containers/TaskListcontainer'

export default class MainTask extends Component{
    render(){
        return(
            <View style = {{flex : 1}}>
                <View style = {{flex : 20}}>
                    <Addtaskcontainer></Addtaskcontainer>
                </View>
                <View style = {{flex : 80, backgroundColor : 'red'}}>
                    <TaskListcontainer></TaskListcontainer>
                </View>
            </View>
        );
    }
}