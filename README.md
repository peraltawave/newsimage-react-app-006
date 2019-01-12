
# **Project 3 Outline**
## **newsimage-react-app**
> University of Arizona Coding Bootcamp / Fall 2018

### **PROJECT SUMMARY**
> Our app is based on two principles:  
> 1. A single picture is worth a thousand words  
> 2. Todays website users are visually driven making our method of presenting news articles useful and therefore preferred

#### **To Start the App in your Browser**
```
yarn start
```



#### **Group Project Members**
Keith Downey / Derek Maloney / Alex Lialios / Miguel Peralta
> https://opencollective.com/synapseclub




### **TECHNICAL DETAILS**
> https://github.com/Travo100/create-react-express-jwt     
> This setup allows for a Node/Express/React/JWT app which can be easily deployed to Heroku.
> The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon. The front end has been setup to use JWT as a way of authenticating users and routes. To understand it's structure better please refer to the following article here

> Server-side article and using JWT:  
> https://hptechblogs.com/using-json-web-token-for-authentication/  
> Front End article on using the JWT on a react application:  
> https://hptechblogs.com/using-json-web-token-react/

#### ***react-table***
> https://react-table.js.org  
> A lightweight, fast and extendable datagrid built for React

#### ***react-photo-gallery***
> http://neptunian.github.io/react-photo-gallery  
> Component used to build and maintain galleries. Decided to use this rather than our first choice (http://materliu.github.io/gallery-by-react/) -- mainly because this repo was really old, depended on an old version of React, and basically looked like a mess under the hood :(

### **FRONT-END**

#### ***Material-UI is available as an npm package.***
```
// with npm
npm install @material-ui/core

// with yarn
yarn add @material-ui/core
```

#### ***Roboto Font***
```
// Shown below is a sample link markup used to load the Roboto font from a CDN.
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">

// Install typface using yarn
yarn add typeface-roboto --save
```
> **Please note that react >= 16.3.0 and react-dom >= 16.3.0 are peer dependencies.**








### **APIS**  

#### ***News API***
> https://newsapi.org/docs/get-started#top-headlines  
> Free API provider for news headlines. Our thought is to call the image prop from for display, and then link to news article

#### ***Reuters***
> https://developers.thomsonreuters.com/all/api-overviews  
> I think this is free for students - will need to check

### **PRACTICE WORK**  
This is the tutorial that we used to get us going and establish some boilerplate code and folder structure
> https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274

We set up a simple CRUD app, but we have some bugs. It uses mongo deployed on mLab
> https://drive.google.com/file/d/1mzbbD3eqpL0oviJjLSQDebJrG2a4Ha3q/view

### **REQUIREMENTS**
- [x] React
- [x] Node Server  
- [x] Express
- [x] Mongo / Mongoose
- [x] Get & Post
- [x] Heroku
- [x] Two Unused Libraries: Material UI, Standard JS or Prettier for coding standards
- [x] User Auth: using JWT
- [x] Polished front end
- [x] MVC Folder Structure
- [x] Coding Standards (Standard JS or Prettier)
- [x] API security - keys, .env, etc.
