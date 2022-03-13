import { makeAutoObservable } from "mobx";
import { baseURL, instance } from "./instance";

class TripsStore {
  trips = [];
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
    } catch (error) {
      console.log("TripsStore -> fetchTrips -> error", error);
    }
  };

  addTrip = async (trip, navigation) => {
    try {
      const formData = new FormData();
      for (const key in trip) {
        console.log({ key, value: trip[key] });
        formData.append(key, trip[key]);
      }
      const res = await instance.post(`/trips`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (data, headers) => {
          return formData; // this is doing the trick
        },
      });
      this.trips = [...this.trips, res.data];
      navigation.navigate("Trip List");
    } catch (error) {
      console.log(error);
    }
  };
}

const tripsStore = new TripsStore();

tripsStore.fetchTrips();

export default tripsStore;
