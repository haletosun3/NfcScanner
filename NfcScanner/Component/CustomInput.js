import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomInput = ({value, onType, placeholder, secureTextEntry, icon}) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={icon} solid style={styles.icon} color={'gray'} size={15} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor='gray'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.025,
    height: Dimensions.get('window').height / 18,
    backgroundColor: 'rgb(27,27,27)',   
    borderRadius: 13,
    marginVertical: 6,
  },
  input: {
    paddingLeft:10,
    color:'white',
    //fontFamily: 'Montserrat-Medium',
    fontSize:12,
    flex:10
  },
  icon: {
    paddingLeft:10,
    paddingBottom:2
  },
});

export default CustomInput;
