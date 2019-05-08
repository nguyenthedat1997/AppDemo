import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Dimensions, StyleSheet} from 'react-native';

export default class componentFlatList extends Component{
    render(){
        return(
            <View style = {{flex : 1, flexDirection : 'row'}}>
                <View style = {{flex : 30, borderBottomWidth : 1, borderBottomColor : 'gray'}}>

                </View>
                <View style = {{flex : 70}}>
                    <FlatList
                        data = {this.props.onlistfood}
                        renderItem = {({item,index})=>{
                            return(
                                <Showflatlist foodname = {item.foodnames}></Showflatlist>
                            );
                        }}
                    >
                    </FlatList>
                </View>
            </View>
            
        );
    }
}
class Showflatlist extends Component{
    render(){
        return(
            <View style = {}>
                <Text>{this.props.foodname}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        height : 100,
        width : this.Dimensions.get('window').width,
        borderBottomWidth : 1, 
        borderBottomColor : 'green'
    }
});