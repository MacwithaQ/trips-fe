import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import profileStore from "./profileStore";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData, navigation) => {
    try {
      console.log(userData);
      const res = await instance.post("/users/signup", userData);
      const { token } = res.data;
      console.log(token);
      this.user = decode(token);
      console.log(this.user);
      await AsyncStorage.setItem("token", token);
      this.setUser(token);
      navigation.navigate("Trip List");
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (userData, navigation) => {
    console.log(userData);
    try {
      const res = await instance.post("/users/signin", userData);
      const { token } = res.data;
      console.log(token);
      this.user = decode(token);
      console.log(this.user);

      await AsyncStorage.setItem("token", token);
      this.setUser(token);
      navigation.navigate("Trip List");
    } catch (error) {
      console.log(error);
    }
  };

  signout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  setUser = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        this.user = decodedToken;
      } else {
        this.user = null;
        await AsyncStorage.removeItem("token");
      }
    }
  };

  signOut = async () => {
    try {
      this.user = null;
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
