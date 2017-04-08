# react-seed

A react-seed project with react, redux and next.js


## getting started

**clone the repository**
```
git clone https://github.com/Burgi0101/react-seed.git
cd react-seed
```
**install the node packages with the node package manager(npm)**
```
npm install
```
**start up the next.js dev server**
```
npm start
```
Open up your browser and enter ```localhost:3000``` and you should see the app up and running.

## testing
To trigger your tests you can just run 
```
npm run test
```
There is also a watch task configured that will run all your tests when changes to
any file in your source folder are applied.

Just open an additional terminal and run the following command.
```
npm run watch
```
## react
In my react projects I like to use **pure component factories** instead of classes and I also
inject React as a dependecy in all reusable components to share a single instance of React across
the entire app.

## next.js
For this seed I used next.js as it comes with HMR (Hot Module Reloading) and let's you start 
to write code within minutes as it's so easy to set it up. 

## styled-jsx
This seed-project is configured to use styled-jsx with a theme file to keep up consistency
for the styling in the whole app. 

