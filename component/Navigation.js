import {createAppContainer} from 'react-navigation'
import {createStackNavigator, createAppContainer } from 'react-navigation-stack'

const StackNavigator = createStackNavigator({
  Init: { 
  	screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  }
})

export default createAppContainer(StackNavigator)