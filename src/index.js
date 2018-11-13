// Telling JS
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App' //Find file in the same directory as index.js, and make available inside here. Pulling from <App /> in index.html. The App component
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root')) // "Mounting the component"
// We're using third party code here.
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
