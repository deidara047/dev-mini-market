export default defineNuxtRouteMiddleware((to, from) => {
  const config = useRuntimeConfig();
  const routesToValid = {
    onSuccess: [],
    onFailure: ["/login-or-signup"]
  }

  if (process.client) {
    const userStore = useUserStore();
    if (userStore.fetchState === "loading") {
      const { account } = useAppWrite(config.public.appwriteProjectID);
      const accountPromise = account.get();

      accountPromise
        .then((res): any => {
          userStore.setUserInfo("success", res);
          if (routesToValid.onFailure.includes(from.path)) return navigateTo("/");
        }, (err): any => {
          userStore.setUserInfo("failure");
          // if(routesToValid.onSuccess.includes(from.path)) return navigateTo("/");
        });
    } else if (userStore.fetchState === "success") {
      if (routesToValid.onFailure.includes(to.path)) return abortNavigation();
    } else {
      // if(routesToValid.onSuccess.includes(to.path)) return abortNavigation();
    }
  }
})