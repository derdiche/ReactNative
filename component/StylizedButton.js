/************************************************************************************************/
/*                                            Import                                            */
/************************************************************************************************/
import React from 'react' 												//import de react
import {View,Text, Image,Button, StyleSheet} from 'react-native'		//import des element de rect native

class StylizedButton extends React.Component{

render(){
	return (
		<View style={styles.main_container}> 
			<Image source={require('../assets/Init/poisson.png')} style={styles.image} />
			<Text style={styles.text}>{this.props.txt}</Text>
		</View>
		)
}

}
/**************************************************/
/*                      STYLE                     */
/**************************************************/
const styles= StyleSheet.create({
	main_container: {
	    flex: 1,
	    backgroundColor:'rgba(0, 0, 0, 0.4)',
	    height:60,
	    justifyContent: 'space-between',
	    borderWidth:  1,
    	borderColor: 'rgba(0, 0, 0, 0.1)',
    	margin:5,
    	justifyContent: "center",
    	flexDirection :'row',
    	alignItems: 'center'
	},
	image:{
    padding: 20,
    width: 50,
    height: 50,
    resizeMode: 'stretch',// permet de resize l'image
  },
  text:{
    padding: 20,
    color: 'white'
  },

})

export default StylizedButton
