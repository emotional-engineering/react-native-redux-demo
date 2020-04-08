### Install React Native & run IOS and Android emulators.

In order to run the project locally using emulators, you need to install XCode and Android Studio.
Then you need to create and run appropriate virtual devices.

Please see this great video which explains how to install React Native locally and run Android/IOS emulators:
https://www.youtube.com/watch?v=RBZL6PO2ytc

[![video](https://img.youtube.com/vi/RBZL6PO2ytc/0.jpg)](https://www.youtube.com/watch?v=RBZL6PO2ytc)

### Install Nodejs

In order to run backend of the project you need to install Nodejs.
Please use this website to install Nodejs:
https://nodejs.org/en/download/

### Install the project

`git clone https://github.com/emotional-engineering/fullstack-dev-assessment.git`

`cd fullstack-dev-assessment`

Install npm modules for backend nodejs application:

`npm i`

Open folder with mobile code:

`cd react_native`

Install npm modules for react native code:

`npm i`

Go to "ios" folder:

`cd ios`

Install pod:

`pod install`


### Run mongo

In order to run application you need to have MongoDB running. Run docker container with mongodb.

`docker run -itd -p 27017:27017 -v /tmp/demo_db:/data/db mongo:latest`

You can change the port 27017 and reflect it in config.json file of the project.
After mongodb start you need to wait 10 seconds before execute next commands.

### Run the application

Navigate to the root folder of the cloned project.

Run backend server:

`node main.js`

Open another terminal and navigate to the project folder.
Go to
`react_native`
folder.

You need to have IOS and Android emulators up and running.

Run this command first:

`source $HOME/.bash_profile`

Run following command to build and run IOS version:

`react-native run-ios`

Run following command to build and run Android version:

`react-native run-android`

You should see application running on a devices.

### Used libraries:

redux - to control state of application: https://redux.js.org

redux-thunk - to make async http requests with Redux: https://github.com/reduxjs/redux-thunk

<Dash/> react component to draw dashed line: https://github.com/obipawan/react-native-dash



### All images in the /images folder where originally downloaded from UnSplash

`img1.jpg Photo by Jacob Miller on Unsplash`

`img2.jpg Photo by Ash Edmonds on Unsplash`

`img3.jpg Photo by Carl Heyerdahl on Unsplash`

`img4.jpg Photo by Tim Gouw on Unsplash`
