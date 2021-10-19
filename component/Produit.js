import React from 'react'
import { StyleSheet, View, TextInput, Button, Text ,FlatList } from 'react-native'
import films from './ListeProduit'
import ProduitItem from './ProduitItem'

class Produit extends React.Component {
  render() {
    return (
      <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ProduitItem data ={item}/>}
      />
    )
  }
}

const styles = StyleSheet.create({
})

export default Produit