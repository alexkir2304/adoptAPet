import {Client, ID, Databases, OAuthProvider, Query, Account} from "appwrite"

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("684564c2002d1e667335");

const account = new Account(client);
const database = new Databases(client);

export {account, database, client};
