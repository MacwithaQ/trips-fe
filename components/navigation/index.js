import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../Home";
// import ShopList from "../shop/ShopList";
// import CartList from "../cart/CartList";
// import CartButton from "../cart/CartButton";
// import ProductList from "../product/ProductList";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import { View } from "native-base";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Signin">
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
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
