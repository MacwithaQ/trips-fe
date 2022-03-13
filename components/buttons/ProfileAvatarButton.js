import { Avatar, HStack } from "native-base";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import profileStore from "../../stores/profileStore";
import { baseURL } from "../../stores/instance";

const ProfileAvatarButton = () => {
  const navigation = useNavigation();
  // const profile = profileStore.profile;
  const handlePress = () => {
    if (authStore.user) {
      profileStore.fetchSingleProfile(authStore.user, navigation);
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
          mt={1}
          width={30}
          height={30}
          // source={{ uri: baseURL + "/" + profileStore.profile.image }}
        ></Avatar>
      </Pressable>
    </HStack>
  );
};

export default ProfileAvatarButton;

const styles = StyleSheet.create({});
