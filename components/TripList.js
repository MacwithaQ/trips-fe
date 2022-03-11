import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { observer } from "mobx-react";
import TripItem from "./TripItem";
import tripsStore from "../stores/tripsStore";
import { Avatar } from "native-base";

const TripList = () => {
  const tripList = tripsStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} />
  ));

  return <ScrollView>{tripList}</ScrollView>;
};

export default observer(TripList);

const styles = StyleSheet.create({});
