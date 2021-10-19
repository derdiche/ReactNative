/************************************************************************************************/
/*                                            Import                                            */
/************************************************************************************************/
import React from 'react' 									//import de reat
import {View,Text, Image,Button, StyleSheet} from 'react-native'		//import ders element de rect native
import StylizedButton from './StylizedButton';
class Init extends React.Component{

render(){
	return (
		<View style={styles.main_container}> 
			<View style={styles.container1}> 
				<Text style={{flex:1,alignSelf:'center',color: 'white',fontSize: 30}}>Le bateau de Thibaullt</Text>
				<View style={{flex:2}}> 
					<Text style={{alignSelf:'center',fontWeight: "bold",color: 'brown'}}>Vente en direct de notre bateau</Text>
					<Text style={{alignSelf:'center',fontWeight: "bold",color: 'brown'}}>Produit selon la saison, Livraisons sur Paris</Text>
					<Text style={{alignSelf:'center',color: 'brown'}}>06.63.99.99.78</Text>
					<Text style={{alignSelf:'center',color: 'brown'}}>lebateaudethibault@gmail.com</Text>
					<Text style={{alignSelf:'center',color: 'brown'}}>www.facebook.com/lebateaudethibault</Text>
				</View>
			</View>
			<View style={styles.container1}> 
				<StylizedButton style={{flex:1}} path="../assets/Init/poisson.png" txt="Produit et promotions"/>
				<View style={styles.c1}>
					<StylizedButton />
					<StylizedButton />
				</View>
				<View style={styles.c1}>
					<StylizedButton />
					<StylizedButton />
				</View>
			</View>
		</View>
		
	)
}

}
/**************************************************/
/*                      STYLE                     */
/**************************************************/
const styles= StyleSheet.create({
	main_container: {
	    flex:1,
	    marginTop: 20,
	},
	container1: {
	    flex:1,
	    
	},
	c1: {
		flex:2,
		flexDirection :'row',
	},

})

export default Init
