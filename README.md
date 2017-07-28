Chatty App
=====================

A simple Slack clone made during week 5 of Lighthouse Labs' web development bootcamp, using this [ReactJS boilerplate](https://github.com/lighthouse-labs/react-simple-boilerplate).

### Description

Real-time messaging app that uses ReactJS and Webpack for the client-side, and communicates with the [server](https://github.com/hannahva/chatty-app-server) via WebSockets.

### Screenshots

![two users start a chat](https://github.com/hannahva/chatty-app/blob/master/docs/2%20users%20start.png?raw=true)
![both users update their usernames](https://github.com/hannahva/chatty-app/blob/master/docs/2%20users%20namechange.png?raw=true)
![number of users updates when a client connection closes](https://github.com/hannahva/chatty-app/blob/master/docs/number%20of%20users%20change.png?raw=true)
### Getting Started

Install dependencies and start the WebPack server listening on port 3000 to compile React:

```
npm install
npm start
```
This app also requires running the WebSockets server found [here](https://github.com/hannahva/chatty-app-server). Download into a separate folder,
```
npm install
npm start
```
to get the server listening on port 3001.

now open <http://localhost:3000> and have that good chat you've been meaning to have with yourself.
### Stack

* Webpack with Babel, JSX, ES6, webpack dev server
* WebSockets using Node package `ws` on the server-side, and native `WebSocket` on client-side ReactJS

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)