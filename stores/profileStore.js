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
    } catch (error) {
      console.log("profileStore -> fetchProfiles -> error", error);
    }
  };

  uploadProfileImage = async (profile) => {
    try {
      const formData = new FormData();
      for (const key in profile) {
        formData.append(key, profile[key]);
      }
      const res = await instance.put(`/profiles/${profile._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (data, headers) => {
          return formData; // this is doing the trick
        },
      });
      this.profile = [...this.profile, res.data];
    } catch (error) {
      console.log(error);
    }
  };

  fetchSingleProfile = async (user, navigation) => {
    try {
      const response = await instance.get(`/profiles/${user._id}`);
      this.profile = response.data;
      if (navigation) {
        navigation.navigate("Profile", {
          profile: this.profile,
        });
      }
    } catch (error) {
      console.log("profileStore -> fetchSingleProfile -> error", error);
    }
  };
}

const profileStore = new ProfileStore();
export default profileStore;
