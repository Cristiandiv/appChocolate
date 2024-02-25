import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import Nestle from './Nestle';
import Garoto from './Garoto';
import Hersheys from './Hersheys';


const Stack = createStackNavigator();

export default function RotasPaginas(){
  return(
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen}/>
        <Stack.Screen name="Nestle" component={Nestle}/>
        <Stack.Screen name="Garoto" component={Garoto}/>
        <Stack.Screen name="Hersheys" component={Hersheys}/>
        </ Stack.Navigator>
  );
}