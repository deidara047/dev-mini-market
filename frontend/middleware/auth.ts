export default defineNuxtRouteMiddleware((to, from) => {
  const config = useRuntimeConfig();

  if (process.client) {
    const { account } = useAppWrite(config.public.appwriteProjectID);
    const promise = account.getSession('current');

    promise.then(function (response) {
      console.log(response);
      console.log("WORKED HERE!")
    }, function (error) {
      console.log(error);
      console.log("DID NOT WORK!")
    });
  }
})