import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authStore from "./authStore";

class ProfileStore {
  profile = null;
  profiles = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfiles = async () => {
    try {
      const response = await instance.get("/profiles");
      this.profiles = response.data;
      console.log("🎉🎉🎉", this.profiles);
    } catch (error) {
      console.log("profileStore -> fetchProfiles -> error", error);
    }
  };

  fetchSingleProfile = async (user, navigation) => {
    try {
      const response = await instance.get(`/profiles/${user._id}`);
      this.profile = response.data;
      navigation.navigate("Profile", {
        profile: this.profile,
      });
      console.log("🎉🎉🎉", this.profile);
    } catch (error) {
      console.log("profileStore -> fetchSingleProfile -> error", error);
    }
  };
}

const profileStore = new ProfileStore();
export default profileStore;
