import { Client, Account, ID } from 'appwrite';

export const useAppWrite = (projectID: string) => {
  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectID);// config.public.appwriteProjectID

  const account = new Account(client);

  return {
    client,
    account,
    ID
  }
}

