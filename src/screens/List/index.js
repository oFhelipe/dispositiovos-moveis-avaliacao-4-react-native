import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import styles from "./styles";

const List = ({ navigation }) => {
  const contatos = useSelector(estado => estado.listaDeContatos.contatos)

  function handleClickOnNewContact() {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos</Text>
        <FlatList
        style={styles.list}
        data={contatos}
        ListEmptyComponent={()=> <Text style={styles.empty}>Nenhum contato cadastrado, adicione um clicando no botão "+" abaixo</Text>}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          const { nome, numero } = item
          return (
            <View style={styles.item}>
              <View style={styles.infos}>
                <Text style={styles.infoText}>Nome: {nome}</Text>
                <Text style={styles.infoText}>Telefone: {numero}</Text>
              </View>
              <View style={styles.separator} />
            </View>
          );
        }}
      /> 

      <TouchableOpacity 
        style={styles.newContactButton}
        onPress={handleClickOnNewContact}>
        <View style={styles.newContact}>
          <View style={styles.plusX}/>
          <View style={styles.plusY}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default List;
