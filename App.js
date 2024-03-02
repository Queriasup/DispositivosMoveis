import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './screens/telaLogin';
import TelaCadastro from './screens/telaCadastro';
import TelaContatos from './screens/telaContatos';
import TelaAdicionarContato from './screens/telaAdicionarContato';
import TelaInfoContato from './screens/telaInfoContato';

const Stack = createNativeStackNavigator();

export default function App(){
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Contatos" component={TelaContatos} />
        <Stack.Screen name="AdicionarContato" component={TelaAdicionarContato} />
        <Stack.Screen name="InfoContato" component={TelaInfoContato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}