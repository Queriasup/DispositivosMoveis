import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Button } from '@rneui/themed';




export default class TelaCadastro extends React.Component {

    render(){
        return (
            <View style = {[styles.containerSignUp, {flexDirection: "column"}]}>
            <View style = {[styles.title]}>Cadastro</View>
            <View style = {[styles.containerPage]}>
            <View style = {[styles.signUpInputsContainer]}>
                <View style = {[styles.inputContainer]}>
                <Text style = {[styles.label]}>Nome</Text>
                <TextInput 
                    style = {[styles.input]}  
                    autoCapitalize='none'/>
                </View>
                <View style = {[styles.inputContainer]}>
                <Text style = {[styles.label]}>Email</Text>
                <TextInput 
                    style = {[styles.input]} 
                    keyboardType='e-mail address' 
                    autoCapitalize='none'/>
                </View>
                <View style = {[styles.inputContainer]}>
                <Text style = {[styles.label]}>Senha</Text>
                <TextInput 
                    style = {[styles.input]} 
                    autoCapitalize='none'/>
                </View>
            </View>
            <Button
                    title="Cadastrar"
                    loading={false}
                    loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                    backgroundColor: 'rgba(111, 202, 186, 1)',
                    borderRadius: 5,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 10,
                    }}/>
            </View>
        </View>
        );
    }    
}

const styles = StyleSheet.create({
    containerLogin: {
      flex: 1,
      padding: 50,
    },
    iconContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    loginInputsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 20,
    },
    inputContainer: {
      height: 65
    },
    label:{
      fontWeight: 'bold',
      fontSize: 18,
    },
    input: {
      flex: 1,
      width: 250,
      backgroundColor: 'lightgray',
      borderRadius: 2,
    },
    buttonContainer:{
      flex: 1,
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'rgba(111, 202, 186, 1)',
      borderRadius: 5,
    },
    containerSignUp: {
      flex: 1,
      alignContent: 'center',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgray',
      height: 75,
      fontSize: 26,
      fontWeight: 'bold',
      fontFamily: 'Arial',
    },
    containerPage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },
    signUpInputsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    },
    });