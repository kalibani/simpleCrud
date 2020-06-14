import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from './Input'

const  Form = ({dataForm, handleChangeText, formType}) => {

  return (
    <View style={styles.formWrapper}>
      <Input
        attrName='noContainer'
        label='No Container' 
        handleChange={(attrName, value) => handleChangeText(attrName, value)}
        value={dataForm.noContainer}
        width={150}
        editable={formType === 'update' ? false : true}
      />
      <Input
        attrName='size'
        label='Size' 
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={dataForm.size}
        marginRight={73}
        width={150}
        editable={formType === 'update' ? false : true}
      />
      <Input
        attrName='type'
        label='Type' 
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={dataForm.type}
        marginRight={68}
        width={150}
        editable={formType === 'update' ? false : true}
      />
      <Input
        attrName='slot'
        label='Slot'
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={dataForm.slot}
        width={100}
        marginRight={74}
      />
      <Input
        attrName='row'
        label='Row'
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={dataForm.row}
        width={100}
        marginRight={70}
      />
      <Input
        attrName='tier'
        label='Tier'
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={dataForm.tier}
        width={100}
        marginRight={73}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    display: 'flex',
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }

})

export default Form;