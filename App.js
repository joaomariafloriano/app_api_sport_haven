import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from './src/screens/Index';
import Fornecedor from './src/screens/Fornecedor';
import Fornecedor_Cadastrar from './src/screens/Fornecedor_Cadastrar';
import Fornecedor_Editar from './src/screens/Fornecedor_Editar';

const Stack =  createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Fornecedor" component={Fornecedor} />
        <Stack.Screen name="Fornecedor_Cadastrar" component={Fornecedor_Cadastrar} />
        <Stack.Screen name="Fornecedor_Editar" component={Fornecedor_Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}