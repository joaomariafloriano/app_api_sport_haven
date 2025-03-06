import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react'
import api from "../config/Api"


export default function App({ route, navigation }) {

    const [text, onChangeText] = useState("");
    const [cnpj, mudarCNPJ] = useState();
    const [tel, mudarTelefone] = useState();
    const [email, mudarEmail] = useState();
    const [endereco, mudarEndereco] = useState();

    const editar = async () => {

        const fornecedor = {
            "id": route.params.id,
            "nome": text,
            "cnpj": cnpj,
            "telefone": tel,
            "email": email,
            "endereco": endereco,
        }


        rota = "/Fornecedor/atualizar/" + route.params.id + "/";

        await api.post(rota, fornecedor)
            .then((response) => {
                navigation.navigate("Fornecedor")
            }).catch((err) => {
                if (err.response) {
                    Alert.alert("Erro", err.response.data.mensagem);
                } else {
                    Alert.alert("Erro", "Erro: Tente mais tarde!");
                }
            });
    }

    return (
        <View style={estilo.tela}>
            <Text>EDIÇÃO</Text>

            <Text>Nome: {route.params.nome}</Text>
            <Text>Novo Nome: </Text>
            <TextInput
                onChangeText={onChangeText}

            />

            <Text>CNPJ: {route.params.cnpj}</Text>
            <Text>CNPJ:</Text>
            <TextInput
                onChangeText={mudarCNPJ}
            />

            <Text>Telefone:</Text>
            <TextInput
                onChangeText={mudarTelefone}
            />

            <Text>E_mail:</Text>
            <TextInput
                onChangeText={mudarEmail}
            />

            <Text>Endereço:</Text>
            <TextInput
                onChangeText={mudarEndereco}
            />

            <Button title="Editar"
                onPress={() => { editar() }} />
        </View>
    );
};


const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 20
    }
})