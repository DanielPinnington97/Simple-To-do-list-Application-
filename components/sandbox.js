import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox(){
    return ( 
        <View style={styles.container}>

            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
        paddingTop:40,
        backgroundColor:'coral',
        justifyContent:'space-around',
        alignItems:'flex-end',
        flexDirection:'row'
    },
    boxOne:{
        flex:1,
        backgroundColor:'white',
        padding:10,
    },
    boxTwo:{
        flex:2,
        backgroundColor:'violet',
        padding:20,
    },
    boxThree:{
        flex:1,
        backgroundColor:'green',
        padding:30,
    },
    boxFour:{
        flex:3,
        backgroundColor:'blue',
        padding:40,
    }
});