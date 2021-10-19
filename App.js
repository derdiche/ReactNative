import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground,StyleSheet, Text, View } from 'react-native';

import Init from './component/Init';
/*********************************************************
 *       import a suprimer utiliser pour les test
 * ******************************************************/
import Produit from './component/Produit';
import ProduitItem from './component/ProduitItem';
class App extends React.Component {
  render() {

    return (      
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
        <Init/>
      </ImageBackground> 
    );  
  }
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
   
  }
});
export default App
