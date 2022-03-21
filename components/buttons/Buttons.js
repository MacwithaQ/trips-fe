import { StyleSheet, Text, View } from "react-native";
import { HStack } from "native-base";
import React from "react";
import AddTripButton from "./AddTripButton";
import Profile from "../user/Profile";
import ProfileAvatarButton from "./ProfileAvatarButton";
import { observer } from "mobx-react";

const Buttons = () => {
  return (
    <HStack>
      <AddTripButton />
      <ProfileAvatarButton />
    </HStack>
  );
};

export default observer(Buttons);

const styles = StyleSheet.create({});
