import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input = ({ 
  value, label, marginRight, width, handleChange, attrName 
}) => {

  const handleChangeText = (updatedValue) => {
    handleChange(attrName, updatedValue)
  }

  return (
    <View style={styles.formWrapper}>
      <Text style={[styles.text, { marginRight: marginRight }]}>
        {label}
      </Text>
      <TextInput
        style={[styles.textInput, { width: width }]}
        onChangeText={handleChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    display: 'flex',
    flexDirection:'row',
    width: '100%',
    marginBottom: 10
  },
  text: {
    top: 0,
    marginRight: 10,
    fontSize: 16
  },
  textInput : {
    width: 200,
    height: 35, 
    borderColor: 'gray', 
    borderWidth: 1,
    fontSize: 14
  }
})

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  marginRight: PropTypes.number,
  width: PropTypes.number
};

Input.defaultProps = {
  marginRight: 10,
  width: 200
}


export default Input;