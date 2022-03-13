import { Pressable, StyleSheet } from "react-native";
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
import Profile from "../user/Profile";
import ProfileAvatarButton from "../buttons/ProfileAvatarButton";
import { NavigationContainer } from "@react-navigation/native";
import Buttons from "../buttons/Buttons";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Trip List">
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="Trip List"
        component={TripList}
        options={{
          headerBackVisible: false,
          headerRight: () => <AddTripButton />,
          headerRight: () => <Buttons />,
          headerLeft: () => <SignOutButton />,
          headerTitle: "Upcoming Trips",
        }}
      />
      <Screen name="Trip Create" component={TripCreate} options={{}} />
      <Screen name="Trip Detail" component={TripDetail} />
      <Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
