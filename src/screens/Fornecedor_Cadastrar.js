import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import api from "../config/Api";

export default function App({ navigation }) {
  const [text, onChangeText] = useState();
  const [cnpj, mudarCNPJ] = useState();
  const [tel, mudarTelefone] = useState();
  const [email, mudarEmail] = useState();
  const [endereco, mudarEndereco] = useState();

  const cadastrar = async () => {
    const fornecedor = {
      nome: text,
      cnpj: cnpj,
      telefone: tel,
      email: email,
      endereco: endereco,
    };

    await api
      .put("/Fornecedor/adicionar/", fornecedor)
      .then((response) => {
        navigation.navigate("Fornecedor");
      })
      .catch((err) => {
        if (err.response) {
          Alert.alert("Erro", err.response.data.mensagem);
        } else {
          Alert.alert("Erro", "Erro: Tente mais tarde!");
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Fornecedor</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Digite o nome do fornecedor"
        value={text}
      />

      <Text style={styles.label}>CNPJ:</Text>
      <TextInput
        style={styles.input}
        onChangeText={mudarCNPJ}
        placeholder="Digite o CNPJ"
        value={cnpj}
        keyboardType="number-pad" // Teclado numérico
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        onChangeText={mudarTelefone}
        placeholder="Digite o telefone"
        value={tel}
        keyboardType="phone-pad" // Teclado telefônico
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText={mudarEmail}
        placeholder="Digite o e-mail"
        value={email}
        keyboardType="email-address" // Teclado para e-mail
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        onChangeText={mudarEndereco}
        placeholder="Digite o endereço"
        value={endereco}
      />

      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0", // Cor de fundo clara
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333", // Cor do título
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555", // Cor dos rótulos
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff", // Cor de fundo dos inputs
  },
  button: {
    backgroundColor: "#FFA500", // Cor de fundo do botão
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff", // Cor do texto do botão
    fontSize: 18,
    fontWeight: "bold",
  },
});
