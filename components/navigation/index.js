import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import TripList from "../TripList";
import TripDetail from "../TripDetail";
import TripCreate from "../TripCreate";
import { View } from "native-base";
import AddTripButton from "../buttons/AddTripButton";
import SignOutButton from "../buttons/SignOutButton";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Trip List">
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Trip List"
        component={TripList}
        options={{
          headerBackVisible: false,
          headerRight: () => <AddTripButton />,
          headerLeft: () => <SignOutButton />,
        }}
      />
      <Screen name="Trip Create" component={TripCreate} options={{}} />
      <Screen name="Trip Detail" component={TripDetail} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
