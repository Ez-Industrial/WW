// src/core/native.js
export { View, Text, TextInput, TouchableOpacity, TouchableHighlight, Alert, StyleSheet, ScrollView, SectionList, Button,
    Pressable, Image, SafeAreaView, ActivityIndicator, Platform, useColorScheme } from "react-native";
import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  return {
    background: colorScheme === 'dark' ? '#121212' : '#ffffff',
    text:       colorScheme === 'dark' ? '#ffffff' : '#000000',
    inputBg:    colorScheme === 'dark' ? '#1e1e1e' : '#f2f2f2',
    border:     colorScheme === 'dark' ? '#333' : '#ccc',
    accent:     '#274bb1ff'
  };
};