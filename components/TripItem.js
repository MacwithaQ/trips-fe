import { StyleSheet, View } from "react-native";
import { baseURL } from "../stores/instance";
import {
  Box,
  Heading,
  AspectRatio,
  HStack,
  Text,
  Image,
  Stack,
} from "native-base";
import profileStore from "../stores/profileStore";

const TripItem = ({ trip }) => {
  console.log(baseURL + "/" + trip.profile.image);
  return (
    <Box
      shadow="2"
      rounded="lg"
      w={{ base: "93%", md: "80", lg: "md" }}
      _light={{ bg: "coolGray.50" }}
      _dark={{ bg: "gray.700" }}
      m="3"
    >
      <AspectRatio w="100%" ratio={1}>
        <Image source={{ uri: baseURL + trip.image }} roundedTop="lg" />
      </AspectRatio>
      {/* <Text
        bold
        position="absolute"
        color="coolGray.50"
        top="2"
        right="20"
        m="4"
      >
        Organized by
      </Text>
      <Text position="absolute" color="coolGray.50" top="7" right="20" m="4">
        Placeholder
      </Text> */}
      <Image
        size={65}
        resizeMode={"cover"}
        borderRadius={100}
        source={{ uri: baseURL + "/" + trip.profile.image }}
        alt="Alternate Text"
        top="-1"
        right="0.1"
        m="4"
        position="absolute"
      />
      <Stack space="2" p="4">
        <Heading size={["md", "lg", "md"]} fontWeight="medium">
          {trip.title}
        </Heading>
        <Text isTruncated noOfLines={["4", "4", "4"]}>
          {trip.description}
        </Text>
      </Stack>
      <HStack space="3" px="4" pb="4">
        {/* <Text
          _light={{ color: "emerald.800" }}
          _dark={{ color: "emerald.300" }}
        >
          Find out more
        </Text> */}
      </HStack>
    </Box>
  );
};

export default TripItem;

const styles = StyleSheet.create({});
