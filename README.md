# Sitoo web admin

This is a demo project, build as part of a job application.

## The Developer has the floor

For this project I took the opportunity to try out React Hooks and two unfamiliar libraries that I wanted to test out, Final forms React and Antd. While it provided great fun, I many times scratched my head trying to figure how pass data to the libraries functions.

It also raised question on how to structure the project, the good ol' container/component pattern that always helpt us separating concerns seems obsolete in a Hooks world. Even Dan Abramov states that [this is probably the case.](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) How is the future going to look like in terms of reusability? While I do not hold all answers, I decided to go with a more scene-based approach for this project. In the end I found myself spending less time jumping around in folders, and it felt pretty straigt forward, considering it was my first dedicated Hooks project.

## How to run the project

1. Clone project
2. __!IMPORTANT!__ Setup your Sitoo API-key according to instructions in this readme. __!IMPORTANT!__
3. `cd` into your project
4. `npm i`
5. `npm start`

## Setup API key

The project uses [dotenv](https://www.npmjs.com/package/dotenv) to provide file with enviromental variables during build time. Here's how you set it up:

1. Rename `.env.example` => `.env`
2. Enter your API-key in .env `REACT_APP_SITOO_API_KEY={enter your sitoo api key here}`

## Deps

* Node.js (project built with v10.15.1, but might run with other versions as well. No guaranties. [Stuff can break](https://twitter.com/dan_abramov/status/1045809734069170176)
