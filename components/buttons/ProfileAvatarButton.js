import { Avatar, HStack } from "native-base";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import profileStore from "../../stores/profileStore";

const ProfileAvatarButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      profileStore.fetchSingleProfile(authStore.user);
    } else {
      Alert.alert("Please sign in to add a trip!");
      navigation.navigate("Signin");
    }
  };

  return (
    <HStack>
      <Pressable onPress={handlePress}>
        <Avatar
          bg="cyan.500"
          width={30}
          height={30}
          source={{
            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        >
          TE
        </Avatar>
      </Pressable>
    </HStack>
  );
};

export default ProfileAvatarButton;

const styles = StyleSheet.create({});
