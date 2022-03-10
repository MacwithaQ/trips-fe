import { Alert, StyleSheet, Text, View } from "react-native";
import { Badge, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const AddTripButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("Trip Create");
    } else {
      Alert.alert("Please sign in to add a trip!");
      navigation.navigate("Signin");
    }
  };
  return (
    <VStack>
      <Ionicons
        name="ios-add-circle-outline"
        size={24}
        color="black"
        style={styles.button}
        onPress={handlePress}
      />
    </VStack>
  );
};

export default observer(AddTripButton);

const styles = StyleSheet.create({
  button: {
    margin: 9,
    marginRight: 30,
  },
});
