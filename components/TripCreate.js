import { StyleSheet } from "react-native";
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
  Image,
} from "native-base";
import * as ImagePicker from "expo-image-picker";
import tripsStore from "../stores/tripsStore";
import { observer } from "mobx-react";
import { instance } from "../stores/instance";

const TripCreate = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [image, setImage] = useState(null);

  const pickImage = async (image) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    let uriParts = result.uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    let uri = result.uri;
    if (!result.cancelled) {
      setImage({ uri, name: `photo.${fileType}`, type: `image/${fileType}` });
      setTrip({
        ...trip,
        image: { uri, name: `photo.${fileType}`, type: `image/${fileType}` },
      });
    }
  };
  // -----------------

  const handleSubmit = () => {
    tripsStore.addTrip(trip, navigation);
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" m="-9">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Create Trip
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
            <Center>
              {image ? (
                <Image
                  source={{ uri: image.uri }}
                  alt="trip image"
                  size="2xl"
                  mb={3}
                  rounded={20}
                />
              ) : null}
            </Center>
            {image === null ? (
              <Button
                onPress={pickImage}
                mt="0"
                colorScheme="indigo"
                variant="outline"
              >
                Add Image
              </Button>
            ) : (
              <Button
                onPress={() => pickImage(image)}
                mt="0"
                colorScheme="red"
                variant="outline"
              >
                Replace Image
              </Button>
            )}
          </FormControl>

          <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
            Create Trip
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default observer(TripCreate);

const styles = StyleSheet.create({});
