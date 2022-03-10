import { StyleSheet, Text, View, TextInput } from "react-native";
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
  TextArea,
} from "native-base";
import { ImagePickerIOS } from "react-native";
import authStore from "../stores/authStore";

const TripCreate = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = () => {};
  const handleChoosePhoto = () => {
    ImagePickerIOS.openSelectDialog;
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" m="-6">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Add A Trip
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
          Fill out the form below to add a trip to our collection.
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Title</FormControl.Label>
            <Input
              placeholder="title"
              onChangeText={(title) => setTrip({ ...trip, title })}
              isRequired={true}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Description</FormControl.Label>
            <TextArea
              placeholder="description"
              multiline={true}
              numberOfLines={3}
              onChangeText={(description) => setTrip({ ...trip, description })}
              isRequired={true}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Image</FormControl.Label>
            <Button
              onPress={handleChoosePhoto}
              mt="0"
              colorScheme="indigo"
              variant="outline"
            >
              Add Image
            </Button>
          </FormControl>

          <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
            Create Trip
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default TripCreate;

const styles = StyleSheet.create({});
