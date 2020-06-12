import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Input from './Input'

const  Form = () => {
  const [form, setValue] = useState({
    noContainer: '',
    size: '',
    type: '',
    slot: '',
    row: '',
    tier: ''
  })

  const handleChangeText = (attrName, value) => {
    setValue({
      ...form,
      [attrName]: value
    });
  }

  const onPress = () => {
    console.log(form.noContainer)
  }


  return (
    <View style={styles.formWrapper}>
      <Input
        attrName='noContainer'
        label='No Container' 
        handleChange={(attrName, value) => handleChangeText(attrName, value)}
        value={form.noContainer}
      />
      <Input
        attrName='size'
        label='Size' 
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={form.size}
        marginRight={73}
      />
      <Input
        attrName='type'
        label='Type' 
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={form.type}
        marginRight={68}
      />
      <Input
        attrName='slot'
        label='Slot'
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={form.slot}
        width={100}
        marginRight={74}
      />
      <Input
        attrName='row'
        label='Row'
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={form.row}
        width={100}
        marginRight={70}
      />
      <Input
        attrName='tier'
        label='Tier'
        handleChange={(attrName, value) => handleChangeText(attrName, value)} 
        value={form.tier}
        width={100}
        marginRight={73}
      />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
    </View>

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