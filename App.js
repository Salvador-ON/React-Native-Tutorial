/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AddText from './components/AddText';
import FlexSample from './components/FlexSample';

const App: () => React$Node = () => {
  return (
    <View style={{marginHorizontal: 25, marginTop:10}}>
      <AddText/>
      <FlexSample flexDir={'column'}/>
      <FlexSample flexDir={'row'}/>
    </View>
  );
};


export default App;
