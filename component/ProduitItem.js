import React from 'react'
import { StyleSheet,View,Text,Image } from 'react-native'

class ProduitItem extends React.Component {
  render() {
    const data = this.props.data
    return (
      <View style={styles.main_container}>
        <View style={styles.container}>
          <Image source={require('../assets/Produit/poulpe.png')} style={styles.image} />
           
           
          <Text style={styles.text}>{data.name}</Text>
        </View>
        <Text style={styles.text}>{data.price}€</Text>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    borderWidth:  1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor:'rgba(0, 0, 0, 0.4)',
    flexDirection :'row',
    justifyContent: 'space-between'
  },
  container:{
    padding: 20,
    flexDirection :'row',
    justifyContent: 'space-between',
  },
  text:{
    padding: 20,
    color: 'white'
  },
  image:{
    padding: 20,
    width: 50,
    height: 50,
    resizeMode: 'stretch'// permet de resize l'image
  }

  
  
})
export default ProduitItem