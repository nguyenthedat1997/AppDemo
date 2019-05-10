import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, Dimensions, StyleSheet} from 'react-native';
export default class TaskManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasknames : ''
        }
    }
    render(){
        
        return(
            <View style = {{flex : 1, flexDirection : "column"}}>
                    <View style = {{flex : 1, flexDirection : 'row', justifyContent : 'center', alignItems :'center'}}>
                        <TextInput style = {{height : 40, width : 200, borderBottomWidth : 1, borderBottomColor : 'gray'}}
                            onChangeText = {(text)=>{this.setState({tasknames : text})}}
                            value = {this.state.tasknames}
                            placeholder = 'Please enter your taskname'
                            placeholderTextColor = 'gray'
                        ></TextInput>
                        <TouchableOpacity style = {{height : 40, width : 70, backgroundColor : 'red', justifyContent : 'center', alignItems : 'center'}}
                            onPress = {()=>{
                                if(!this.state.tasknames.trim()){
                                    alert('Task name is not empty!');
                                    return;
                                }
                                this.props.onAddtask(this.state.tasknames);
                            }}
                        >
                            <Text>Add</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}
