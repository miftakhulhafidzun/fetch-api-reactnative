import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BeerListScreen from "./BeerListScreen";
import BeerDetailScreen from "./BeerDetailScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BeerList">
        <Stack.Screen name="BeerList" component={BeerListScreen} />
        <Stack.Screen name="BeerDetail" component={BeerDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
