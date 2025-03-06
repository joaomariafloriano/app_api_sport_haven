import { Text, View, Button, StyleSheet } from 'react-native';

export default function App({navigation}) {
    return (
        <View style={estilo.tela}>
            <Text>MENU</Text>
            
            <Button title="Fornecedor"
            onPress={() => {
          navigation.navigate("Fornecedor")
            }} />
        </View>
    );
};


const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 20
    }
})