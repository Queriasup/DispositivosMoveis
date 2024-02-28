import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/EvilIcons';

const Login = () => {
  return (
    <View style = {[styles.containerLogin, {flexDirection: "column"}]}>
      <View style = {[styles.iconContainer]}><Icon name='user' size={300} color='gray'/></View>
      <View style = {[styles.loginInputContainer]}>
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
            secureTextEntry={true}/>
        </View>
      </View>
      <View style = {[styles.buttonContainer]}>
          <Button
              title="Logar"
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
              }}
            />
            <Button
              title="Cadastrar-se"
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
              }}
            />

      </View>
    </View>
  );
  };

  const Signup = () => {
    return (
      <View style = {[styles.containerSignUp, {flexDirection: "column"}]}>
        <View style = {[styles.title]}><Text>Cadastro</Text></View>

      </View>
  );
  };
  
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
  loginInputContainer: {
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
  title:{

  },
  });
  
  export default Login;
