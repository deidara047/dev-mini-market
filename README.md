# Dev Mini Market
Dev Mini Market is an app that's all about simple grocery shopping. It also has a to-do list.

The front-end side application implements Nuxt.js, while on the back-end side it implements Nest.js. GraphQL was used for the API, and finally PostgreSQL was used as the database system. This application implements Google Authenticator as a means of authentication, which at the same time uses the Google Authenticator service provided by appwrite.io.

This application implements Nuxt UI as a UI Library.

## How can I test this?
1. Get a PostgreSQL DB.
2. Get an appwrite.io account (can be a free account, which I used).
3. In `backend/.env` file, replace `DATABASE_URL` data with your PostgresSQL URI of your already-created PostgreSQL database.
4. Execute `npx prisma migrate dev` when your CMD is located on `backend` (`cd backend`). Remember to choose a name for the new migration which still is not registered in the current migrations (check `backend/prisma/migrations` folder)
5. In your appwrite.io account, enable Google Authenticator service (although it is somewhat complex, it is something that will not be explained how to configure in this space). I think is important to say I made the minimum configuration on that service, anyway always check it out if something is diferent on yours. (check on `frontend/utils/index.ts` file for more information.
6. In `frontend/.env` file, replace `APPWRITE_PROJECT_ID` data with your appwrite.io project ID.
7. Locate yourself in `frontend` folder (or execute `cd frontend` on your CMD), and then, execute `npm run dev` (you can run this app in production as well). This is going to turn on the frontend.
8. Locate yourself in `backend` folder (or execute `cd frontend` on your CMD), and then, execute `npm run start:dev` (you can run this app in production as well). This is going to turn on the backend.
9. All done. Just test it now

I'm very sorry to say this, but I think that the instructions may not be completely clear, so if you have any questions, it is always recommended that you complement the previous instructions with your knowledge of the platforms or development, and if you don't have any, it is recommended that you investigate of what you don't know. 

In any case, if you still can't run this program, you can open an Issue and maybe it can be solved there (it is not necessary to put much emphasis on this small and insignificant program but whatever you want).

## Demonstration Video:
Check this video if you want to know how to use this app.
[https://www.youtube.com/watch?v=dQw4w9WgXcQ](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
(I know, I will upload the video, just wait).

### Dev Note:
When adding a note to the to-do list, as you know, Apollo Client implements a cache system where the queries made are saved in cache, and when making a mutation, the cache of the previously made queries must be updated , otherwise, the query already performed will return the data it returned the first time, even after it has already been mutated in the database. Now, there are two ways to to fix this issue: through the "refreshQueries" option, or with the "update" function.

Neither of them worked for me personally. Why? I don't know. It could have been NuxtApollo, problems with Nuxt.js, Apollo Client, or my code. I don't know, but I didn't find the error. I admit my mistake in not doing more research on this.

I did a work-around, which consisted of updating the temporary data of the component, that is, the data array. I know it's not the right thing to do, I know the query should be asked again. Therefore, although I am not committing to anything, maybe in the future I will look for a way to implement it only in a separate project with Apollo Client directly, and we will see if it works, then I will be able to say that I handle the cache issue more and I will be able to improve my Client-side GraphQL development.

More information in the file `frontend/pages/to-buy/index.vue` , `line 124-133`.