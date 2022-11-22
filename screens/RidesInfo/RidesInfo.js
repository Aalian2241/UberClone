import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image, ListItem } from 'react-native-elements'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import tw from 'twrnc';
import RideHistory from '../../components/RideHistory/RideHistory'
import ScheduledRides from '../../components/ScheduledRides/ScheduledRides'
import MapScreen from '../MapScreen/MapScreen';
import inProgress from '../../components/InProgress/inProgress';
import progressComp from '../../components/InProgress/progressComp';
import confirmTrip from '../../components/ScheduledRides/confirmTrip'
const RidesInfo = () => {
const Tab = createMaterialTopTabNavigator();


  return (
 
    <View style={tw`flex-1`}>
      <Tab.Navigator>
        <Tab.Screen name="Completed" component={RideHistory} />
        <Tab.Screen name="Scheduled" component={ScheduledRides} />
        <Tab.Screen name="In-Progress" component={progressComp} />
        
      </Tab.Navigator>  
      
    </View>
  )
}

export default RidesInfo

