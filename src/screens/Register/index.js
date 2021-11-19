import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import arrowBack from '../../assets/arrowBack.png';
import * as contatosActions from '../../store/contatos-actions'

import styles from './styles'

const Register = ({ navigation }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch()

  function getName(paramName) {
    setName(paramName);
  }

  function getPhone(paramPhone) {
    setPhone(paramPhone);
  }

  function clearInputs() {
    setName("");
    setPhone("");
  }
  
  function goBack() {
    navigation.goBack()
  }

  function addContato() {
    const contato = {
      nome: name,
      numero: phone
    }
    const acao = contatosActions.addContato(contato)
    dispatch(acao)
    clearInputs()
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={goBack} style={styles.btnBack}>
            <Image
              style={styles.btnBackImage}
              source={arrowBack}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Adicionando contato</Text>
        </View>
        <Text style={styles.subtitle}>Informe os dados de contato</Text>
      </View>
      
      <TextInput 
        style={styles.input}
        placeholder='Digite um nome'
        onChangeText={getName}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder='Digite um telefone'
        onChangeText={getPhone}
        value={phone}
      />

    <TouchableOpacity style={styles.btnRegister} onPress={addContato}>
        <Text style={styles.textBtn}>Confirmar</Text>
    </TouchableOpacity>
    </View>
  );
}

export default Register;