import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default class Welcome extends React.Component{
    render(){
        return(
            <View style= {styles.container} >
            <Text style= {styles.Santa}>
            WElCOME TO BOOK SANTA
            </Text>
            <TextInput style = {styles.emailID}
            placeholder = "emailID"
            />
            <TextInput style ={styles.password}
            placeholder = "password"
            />
            <TouchableOpacity style = {styles.button}>
            <Text>
                 LOGIN
            </Text>
            </TouchableOpacity>
            </View>
        )
    }

    
}

const styles = StyleSheet.create({
    Santa:{
        backgroundColor: "#FF0000",
        marginTop: 10,
        width: 1000,
        height: 50,
        borderWidth: 2.5,
        marginBottom: 1,
        borderRadius: 15,
        alignSelf: 'center'
    },
    container:{
        flex:1,
        backgroundColor:'#00FF99',
        justifyContent:'center',
        alignItems:'center',
        textAlign: "center"

    },
    button:{
        backgroundColor: "#FF00FF",
        marginTop:200,
        width: 350,
        height: 50,
        borderWidth: 2.5,
        marginBottom: 1,
        borderRadius: 15,
        alignSelf: 'center'

    },
    
    
    emailID :{
        width: 300,
        height: 100,
        borderBottomWidth:3,
        borderColor : '#00cc00',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
        color: "#00cc00",
        fontWeight: "bold",
        textAlign: "center"
    },
    password :{
        width: 300,
        height: 100,
        borderBottomWidth:3,
        borderColor : '#00cc00',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
        color: "#00cc00",
        fontWeight: "bold",
        textAlign: "center"
    }
    

}
 
 )
























