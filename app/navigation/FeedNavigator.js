import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "../navigation/routes";

const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name={routes.LISTINGS}
        options={{ headerShown: false }}
        component={ListingsScreen}
      />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
