import React, {Component} from 'react';
import {View, Text, TextInput ,TouchableOpacity, FlatList, Dimensions, StyleSheet} from 'react-native';

export default class componentFlatList extends Component{
    render(){
        let value = '';
        return(
            <View style = {{flex : 1, flexDirection : 'column'}}>
                <View style = {{flex : 20,flexDirection : 'row', alignItems : 'center', justifyContent : 'center' ,borderBottomWidth : 1, borderBottomColor : 'gray'}}>
                    <TextInput style = {{height : 40, width : 200, borderWidth : 1, borderColor : 'green'}}
                        onChangeText = {(Text)=>{value=Text}}
                        value = {value}
                        placeholder = "Please enter food name"
                        placeholderTextColor = 'gray'
                    >
                    </TextInput>
                    <TouchableOpacity style = {{height : 40, width : 70, backgroundColor : 'red', justifyContent : 'center', alignItems : 'center'}}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flex : 80, backgroundColor : 'green'}}>
                    <Text>{this.props.arrayfood.key}</Text>
                </View>
            </View>
            
        );
    }
}

const getwidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container : {
        height : 100,
        width : getwidth,
        borderBottomWidth : 1, 
        borderBottomColor : 'green'
    }
});