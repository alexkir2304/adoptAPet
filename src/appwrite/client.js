import {Client, ID, Databases, OAuthProvider, Query, Account, Storage} from "appwrite"

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("684564c2002d1e667335");

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export {account, database, client, storage};
