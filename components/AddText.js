import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';


const AddText = () => {
  return ( 
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <TextInput placeholder={"Input text"} style={{width: '80%', borderColor: "black", borderWidth: 1, marginHorizontal: 10}}/>
      <TouchableOpacity
        activeOpacity={.5}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Add</Text>
      </TouchableOpacity>
    </View>
   );
}
 

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 14,
    backgroundColor: 'red',
    borderRadius: 6,
    width: '20%'
  },

  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
 
});

export default AddText;
