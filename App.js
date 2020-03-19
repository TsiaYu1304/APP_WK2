import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumDetail from './src/components/AlbumDetail';
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <View>
      <Header />
      <AlbumList />

    </View>
  );
};

export default App;