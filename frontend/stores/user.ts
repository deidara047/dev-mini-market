import type { Models } from "appwrite";

type Res = "loading" | "success" | "failure";

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: null as null | Models.User<Models.Preferences>,
      fetchState: "loading" as Res
    }
  },
  actions: {
    setUserInfo(res: Res, userInfo?: Models.User<Models.Preferences>) {
      if(res === "success") {
        this.userInfo = userInfo!;
      }
      this.fetchState = res;
    },
    deleteUserInfo() {
      this.userInfo = null;
      this.fetchState = "failure";
    }
  }
});