# bike-character-map

[![Netlify Status](https://api.netlify.com/api/v1/badges/8892d9c1-56e8-4ed1-a626-8f245cfdb4db/deploy-status)](https://musing-nightingale-cff63c.netlify.app)![NuxtJS](https://img.shields.io/badge/Nuxt-black?style=for-the-badge&logo=nuxt.js&logoColor=white)

A map used to display all the wonderful characters that live in the bike lanes and bike ways of Portland, Oregon.
Feel free to use the issues tab to suggest general site changes, or to inform me about characters that may have been missed (or submit them yourselves (see below))!

## This repo has a sub-module

Be sure to clone like so:

```bash
git clone --recursive https://github.com/TNorbury/bike-character-map.git
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## How to Add Characters

So you've gone and taken some pictures of bikeway characters and want to add them to the map? No problem, in this guide I'll walk you through how to do just that :).

### Guidelines for taking a good image

This is less about photographic theory and more about creating a image that displays a bikeway character good (and is also consistent with other ones on the website). At an absolute minimum shoot the image in a portrait orientation. I'd recommend standing about half and foot or so behind the character and holding your phone (or whatever camera you're using) with outstretched hands and aiming the lens about downwards at ~45° angle. The image below demonstrates what a "pretty good" character picture look like
![A goat with a cape](static/characters/goat.jpg)

### Steps for adding

I'll assume that at this point you've already forked the repo, if you haven't don'e that, then do that now.

#### 1. Optimize the images

First you'll want to optimize the images, to do this, you can use a little script I wrote inside of `./scripts/image_optimize`. Start by putting the images you want to optimize inside of `./scripts/image_optimize/images/original`. At this point you should also give all the images a unique name, something descriptive, like "goat.jpg"

Now, you can run the script. If this is your first time, be sure to run the good ol' `npm install`. Now run the following command, which will optimize the images and put them into the folder for submissions (because of how I have lfs setup, this is unfortunately the round about way things have to be set up)

```bash
cd scripts/image_optimize && npm start && cp -r out/. ../../character_submissions/
```

#### 2. Creating new BikewayCharacter objects

The repository of bikeway characters is located in [`./store/bikeway_characters.ts`](./store/bikeway_characters.ts). Now you'll want to create a new `BikewayCharacter` object for each image. There are four required pieces of information:  

1. Name  
   The name that's displayed at the top of the little pop-up

2. Image url
   The path to the image, should be in the form of `/characters/${filename}.jpg`

3. Coordinates  
   Where in the world is this character? The way I like to get the coordinates is by finding where the character is in Google Maps, and then right clicking on the exact-ish location and then clicking on the coordinates displayed as the first option of the menu. This will copy the coordinates to your clipboard. I take all of these pictures (save for a handful) on my phone, which geo-tags the images. So when I download them onto my computer I can use that information as a starting point and then get the exact-ish location with Google Maps.

4. Alt Text  
   A description of the character, for screen reader support.

An optional fifth boolean argument is specifying whether or not the character is located on a speed bump. This changes what the icon looks like on the map.

#### 3. Open a PR

Everything looking good? Sweet, now you can open a PR to the development branch.
