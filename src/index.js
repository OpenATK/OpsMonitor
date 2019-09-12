import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

import App from 'cerebral'
import Devtools from 'cerebral/devtools'
import { Container } from '@cerebral/react'
import AppComponent from './view/App'
import controller from './controller'


let devtools = null

if (process.env.NODE_ENV !== 'production') {
  devtools = Devtools({
    // Connect to Electron debugger (external debugger). It will
    // fall back to chrome extension if unable to connect
    host: 'localhost:8585',

    // By default devtools connects to "ws://". This option should be set to true
    // when browser operates on https. Follow debugger instructions for
    // further configuration
    https: false,

    // By default the devtools tries to reconnect
    // to debugger when it can not be reached, but
    // you can turn it off
    reconnect: true,

    // Time travel
    storeMutations: true,

    // Shows a warning when you have components with number of
    // state dependencies or signals above the set number
    bigComponentsWarning: 5,

    // Warnings when passing objects and arrays as props to child
    // components. They should rather be connected directly
    warnStateProps: true,

    // In addition to these basic JavaScript types: Object, Array, String, Number
    // and Boolean, types of File, FileList, Blob, ImageData and RegExp is allowed to be stored in state
    // tree. You can add additional types if you know what you are doing :)
    allowedTypes: [Blob]
  })
}

const app = App(controller, {devtools})

ReactDOM.render(
  <Container app={app}>
    <AppComponent />
  </Container>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
