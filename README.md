## Walky-Doggy

Walky-Doggy is dog walking app which connects owners of dogs with dog walkers. There is an interface for both owners and walkers, each with their own functionalities. An owner can book a new walk, have a look at their upcoming walks, as well as go through their walk history. When in their history tab, they can see more detail about the walky, such as whether or not their doggy did their thingy (pee or poo). Walkers are able to find upcoming walks and subscribe to them, as well as go through their upcoming and past walks. They are able to update the record of the walkies they've completed with pee and poo data, as well as images.

## Getting Started

Before moving ahead, you will need to create a [Cloudinary](https://cloudinary.com) account to save photos and see them on Walky-Doggy.

In the `/client` folder, create a file called .env.local:

```bash
touch .env.local
```

In this file, you will need to store your Cloudinary upload_preset and cloud_name IDs:

```bash
NEXT_PUBLIC_UPLOAD_PRESET='xxxxxxxx'
NEXT_PUBLIC_CLOUD_NAME='xxxxxxxxx'
```

## Running the app

### Back End

From the root folder, `cd` into the `/server` folder and run `npm i` in order to install all dependencies.

Once this is done, run `npm start` to initiate the server on port 3001.

### Front End

Open another terminal and `cd` into the `/client` folder. If you are still in the server folder, `cd ..` into the root folder first, before moving into the client.

Once in the client folder, install all dependencies using `npm i`. Then, run `npm start` to run the NextJS scripts and connect the front end. Once all of the above steps are taken, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Useful information

All info with regards to the Mongo database connection can be found in `/server/config.ts`. Changes can be made in this file.
