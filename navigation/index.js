import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import circlePlusIcon from '../assets/plus-circle.png';
import  ProductComponent  from '../components/Product.component';
import OrderComponent from '../components/Order/Order.component';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Shopping"
      activeColor="#5860ef"
      labelStyle={{ fontSize: 12 }}
      inactiveColor="#bfcad9"
      barStyle={{ backgroundColor: '#ffffff' }}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ProductComponent}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CirclePlus"
        component={Notifications}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons color={color} size={30} name = "plus-circle-outline"/>
            <Image source = {circlePlusIcon} style = {{width: 50, height: 50, marginTop: -10}} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={OrderComponent}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
