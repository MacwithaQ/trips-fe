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

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = () => {
    authStore.signup(user, navigation);
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              placeholder="username"
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="email"
              onChangeText={(email) => setUser({ ...user, email })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              placeholder="password"
              onChangeText={(password) => setUser({ ...user, password })}
              type="password"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input
              placeholder="first name"
              onChangeText={(firstName) => setUser({ ...user, firstName })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              placeholder="last name"
              onChangeText={(lastName) => setUser({ ...user, lastName })}
            />
          </FormControl>
          <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
            Sign Up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm an existing user.{" "}
            </Text>
            <Link
              onPress={() => {
                navigation.navigate("Signin");
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
                Sign In
              </Text>
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signup;

const styles = StyleSheet.create({});
