import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import { Icon } from 'native-base';

import Form from './Form';

const App = ({ 
  modalVisible, 
  setModalVisible, 
  dataForm, 
  handleChangeText,
  handleClick,
  formType
 }) => {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { height: formType === 'delete' ? 200 : 400 }]}>
            {
              formType !== 'delete' ? (
                <Form 
                  handleChangeText={handleChangeText}
                  dataForm={dataForm}
                  formType={formType}
                />
              ) : (
                <View>
                  <Text style={styles.textStyle}>Alert</Text>
                  <Text style={styles.textStyle}>Yakin Hapus Data</Text>
                </View>
              )
            }
            <View style={styles.actionWrapper}>
              <TouchableHighlight 
                onPress={setModalVisible}>
                  {
                    formType !== 'delete' ? 
                    <Icon type="FontAwesome" name="close" /> :
                    <Text style={styles.actionText}>No</Text>
                  }
                
              </TouchableHighlight>
              <TouchableHighlight 
                onPress={() => handleClick(dataForm)}
              >
                {
                  formType !== 'delete' ?
                  <Icon type="FontAwesome" name="check" /> :
                  <Text style={styles.actionText}>Yes</Text>
                }
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    width: 300,
    height: 400,
    margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  actionWrapper: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    marginTop: 30
  },
  actionText: {
    width: 100,
    textAlign: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 16
  }
});

export default App;