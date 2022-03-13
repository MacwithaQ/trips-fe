import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
//import Profile details:
import authStore from "../../stores/authStore";
import { baseURL } from "../../stores/instance";
import tripsStore from "../../stores/tripsStore";
import { observer } from "mobx-react-lite";

const Profile = ({ route, navigation }) => {
  const user = authStore.user;
  const profile = route.params.profile;
  console.log(profile);

  const userTrips = tripsStore.trips
    .filter((trip) => trip.organizer === user._id)
    .map((trip) => (
      <View style={styles.mediaImageContainer}>
        <Image
          source={{ uri: baseURL + trip.image }}
          style={[styles.image, styles.tripImage]}
          resizeMode="cover"
        ></Image>
        <Text style={styles.imageText}>{trip.title}</Text>
      </View>
    ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="#52575D"
            onPress={() => navigation.navigate("Trip List")}
          ></Ionicons>
          <Ionicons
            name="ellipsis-vertical-outline"
            size={24}
            color="#52575D"
          ></Ionicons>
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{ uri: baseURL + "/" + profile.image }}
              style={styles.image}
              resizeMode="cover"
            ></Image>
          </View>
          <View style={styles.add}>
            <Ionicons
              name="ios-add"
              size={48}
              color="#DFD8C8"
              style={{ marginTop: 6, marginLeft: 2 }}
              onPress={() => alert("choose an image")}
            ></Ionicons>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            {user.firstName + " " + user.lastName}
          </Text>
          <Text
            style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}
          ></Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
            {user.username}
          </Text>
        </View>
        <View style={styles.aboutMeTitle}>
          <Text style={[styles.subText, styles.recent]}>About Me</Text>
          <View style={styles.dm}>
            <MaterialIcons
              onPress={() => alert("hello")}
              name="edit"
              size={18}
              color="#DFD8C8"
            ></MaterialIcons>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.bio}>
            <View style={{ width: 307 }}>
              <Text
                style={[
                  styles.text,
                  { color: "#41444B", fontWeight: "300", textAlign: "justify" },
                ]}
              >
                {profile.bio}
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.subText, styles.recent]}>My Trips</Text>
        <View style={{ marginTop: 10 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {userTrips}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },

  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    top: 20,
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    position: "relative",
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,
  },
  tripImage: {
    position: "absolute",
    width: 180,
    height: 200,
    zIndex: -1,
  },
  imageText: {
    position: "absolute",
    bottom: 0,
    paddingLeft: 10,
    width: "100%",
    height: "20%",
    paddingTop: 4,
    color: "black",
    backgroundColor: "rgba(255,255,255,0.6), transparent",
  },
  recent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 50,
    width: 200,
    marginLeft: 40,
    marginTop: 32,
    marginBottom: 10,
    fontSize: 14,
  },
  aboutMeTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 30,
  },
  bio: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  bioIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
