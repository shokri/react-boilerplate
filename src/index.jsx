import App from 'App'
import 'assets/scss/app.scss'
import ReactDOM from 'react-dom'
import * as serviceWorker from './libs/serviceWorker'
// import reportWebVitals from './libs/reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
