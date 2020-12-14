import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";
import BakeryList from "../BakeryList";
import BakeryDetail from "../BakeryDetail";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="BakeryList"
        component={BakeryList}
        options={{
          title: "Choose a Bakery",
        }}
      />
      <Screen
        name="BakeryDetail"
        component={BakeryDetail}
        options={({ route }) => {
          const { bakery } = route.params;
          return {
            title: bakery.name,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
