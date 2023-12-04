This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
# Step 1 
First, install the dependencies:

```bash
npm install
```
# Step 2
Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If a development server is running at localhost, the code is working.

# Step 3
1. First, create a MongoDB Atlas account and create a cluster. (IMPORTANT!)
2. Create a MongoDB Databse Access Account. This is to allow the code to access the database. (IMPORTANT!)
3. Add you IP Address to the MongoDB Atlas Network Access. This is to allow your IP Address to access the database. (IMPORTANT!)
(Refer To Mongo DB Documents for more information)

# Step 4
# Connection to Database
Then, create a .env.local file in the root directory and add the following code:

You will need to create a database account which have privilege to read and write the database.
Then, replace the [USER] and [PASSWORD] with the username and password of the database account. 
Replace the [DATABASE NAME] with the name of the database you created in the cluster or automatically generated if not one in the cluster.

This is how your .env.local file should look like:
```bash
MONGODB_URI = mongodb+srv://<USER>:<PASSWORD>@foodorderdb.boovfve.mongodb.net/<DATABSE NAME>
NEXTAUTH_URL = http://localhost:3000/
NEXTAUTH_SECRET= <SSH HASH CODE>
```

How to create your own SSH HASH CODE:
```bash
openssl rand -base64 32
```
You will require a Git Bash to run the above command or use a website generator to generate the SSH HASH CODE.


# Finish
#### After Following all the Steps the Database should be connected and the code should be working.

