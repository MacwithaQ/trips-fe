import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  VStack,
  HStack,
  Box,
  Heading,
  Center,
  FormControl,
  Input,
  Link,
  Button,
} from "native-base";
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = () => {
    authStore.signin(user, navigation);
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          <Text>Welcome</Text>
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          <Text>Sign in to continue!</Text>
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>
              <Text>Username</Text>
            </FormControl.Label>
            <Input
              placeholder="username"
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Text>Password</Text>
            </FormControl.Label>
            <Input
              placeholder="password"
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              <Text> Forget Password?</Text>
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            <Text> Sign In</Text>
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              <Text
                style={{
                  color: "indigo",
                  fontWeight: "bold",
                  fontSize: "sm",
                }}
              >
                {" "}
                Sign Up
              </Text>
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signin;

const styles = StyleSheet.create({});
