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
}

const tripsStore = new TripsStore();

tripsStore.fetchTrips();

export default tripsStore;
