import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input = ({ 
  value, label, marginRight, width, handleChange, attrName, editable
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
        editable={editable}
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
    top: 3,
    marginRight: 10,
    fontSize: 16
  },
  textInput : {
    width: 150,
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
  width: 200,
  editable: true
}


export default Input;