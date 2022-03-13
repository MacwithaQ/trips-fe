import { Alert, StyleSheet, Text, View } from "react-native";
import { Badge, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const SignOutButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      authStore.signOut();
      navigation.navigate("Signin");
      Alert.alert("Signed Out");
    } else {
      // Alert.alert("You are not signed in");
      // navigation.navigate("Signin");
    }
  };
  return (
    <VStack>
      <FontAwesome
        name="sign-out"
        size={24}
        color="black"
        style={styles.button2}
        onPress={handlePress}
      />
    </VStack>
  );
};

export default observer(SignOutButton);

const styles = StyleSheet.create({
  button: {
    margin: 9,
    marginRight: 30,
  },
  button2: {
    margin: 9,
    marginLeft: 30,
  },
});
