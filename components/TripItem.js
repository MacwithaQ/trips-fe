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

const TripItem = ({ trip }) => {
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
        <Image
          source={{
            uri: baseURL + trip.image,
          }}
          alt="image base"
          roundedTop="lg"
        />
      </AspectRatio>
      <Text
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
      </Text>
      <Image
        size={65}
        resizeMode={"cover"}
        borderRadius={100}
        source={{
          uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        }}
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
          {/* Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. It is located in southern India on the Deccan Plateau.The
          city is also known for its parks and nightlife. Bangalore is the major
          center of India's IT industry, popularly known as the Silicon Valley
          of India. */}
          {trip.description}
        </Text>
      </Stack>
      <HStack space="3" px="4" pb="4">
        <Text
          _light={{ color: "emerald.800" }}
          _dark={{ color: "emerald.300" }}
        >
          Find out more
        </Text>
      </HStack>
    </Box>
  );
};

export default TripItem;

const styles = StyleSheet.create({});
