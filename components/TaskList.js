import React, {Component} from 'react';
import {View, Text, FlatList,StyleSheet,Dimensions} from 'react-native';

export default class TaskList extends Component{
    render(){
        return(
                <FlatList
                    data = {this.props.task}
                    renderItem = {(item,index)=>{
                        return(
                            <View style = {styles.viewcontainer}>
                                <Text>{item.taskname}</Text>
                            </View>
                        );
                    }}       
                ></FlatList>
        );
    }
}
const styles = StyleSheet.create({
    viewcontainer : {
        height : 100, 
        width : Dimensions.get('window').width, 
        borderBottomWidth : 1, 
        borderBottomColor : 'gray',
        justifyContent : 'center',
        alignItems : 'center'
    }
});