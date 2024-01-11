import React, { useState, useRef } from 'react';
import { View, Button, Image, StyleSheet, Animated, Text, TouchableOpacity, Modal, Dimensions, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import { AsyncStorageEventProvider } from './AsyncStorageEventContext';

const App = () => {
 const stack = createNativeStackNavigator()
 return(
  <AsyncStorageEventProvider>
  <AuthNavigation />
  {/* Other components within your app */}
</AsyncStorageEventProvider>
 );
};


export default App;
