import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Home extends Component{

    render(){
        return(
            <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <Text style = {{fontSize : 30, fontWeight : 'bold'}}>This is screen count</Text>
                <View style = {{flexDirection : 'row', marginTop : 30}}>
                    <TouchableOpacity style = {{height : 40, width : 120, borderRadius : 10 ,backgroundColor : 'green', justifyContent : 'center', alignItems : 'center'}}
                        onPress = {()=>{
                            this.props.onIncrease(1);
                        }}
                    >
                        <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'white'}}>Increase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{height : 40, width : 120,marginLeft : 15,borderRadius : 10 ,backgroundColor : 'red', justifyContent : 'center', alignItems : 'center'}}
                        onPress = {()=>{
                            this.props.onDecrease(1);
                        }}
                    >
                        <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'white'}}>Decrease</Text>
                    </TouchableOpacity>
                </View>
                <Text style = {{fontSize : 20, fontWeight : 'bold', marginTop : 30}}>Count : {this.props.times}</Text>
            </View>
        );
    }
}