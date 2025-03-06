import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet, Button} from 'react-native';
import api from "../config/Api";

export default function App({navigation}) {
  const [fornecedor, setFornecedor] = useState([]);

  const getFornecedor = async () => {
    await api.get("/Fornecedor/listar/")
      .then((response) => { 
        setFornecedor(response.data);
      }).catch((err) => { 
        if (err.response) { 
          Alert.alert("Erro", err.response.data.mensagem);
        } else { 
          Alert.alert("Erro", "Erro: Tente mais tarde!");
        }
      });
  }

  const removerFornecedor = async (id) => {
    rota = "/Fornecedor/remover/"+id+"/"
    await api.delete(rota)
      .then((response) => { 
        getFornecedor();
      }).catch((err) => { 
        if (err.response) { 
          Alert.alert("Erro", err.response.data.mensagem);
        } else { 
          Alert.alert("Erro", "Erro: Tente mais tarde!");
        }
      });
  }

    useEffect(() => {
    getFornecedor();
  }, []);

  return (
    <View style={estilo.tela}>
      <Button title="Cadastrar"
                    onPress={() => {
                  navigation.navigate("Fornecedor_Cadastrar")
                    }} />
           
        <FlatList
          data={fornecedor}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.nome} - {item.id}
              |
              <Button title="Editar"
                    onPress={() => {
                      navigation.navigate("Fornecedor_Editar", {id:item.id, nome:item.nome,
                         cnpj:item.cnpj, telefone:item.telefone, email:item.email, endereco:item.endereco})
                    }} />
              |
              <Button title="Remover"
                    onPress={() => {
                      removerFornecedor(item.id)
                    }} />
            </Text>
          )}
        />

        
    </View>
  );
};


const estilo = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 24
  }

});