import React from 'react'
import ReactDOM from 'react-dom'
import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import reducer from './reducer/index'
import Lessons from './containers/Lessons'
import Codes from './containers/Codes'
import PythonBoard from './components/PythonBoard'

const store = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer)

const App_404 = () => <h1 className="text-center">404</h1>
ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <Router history={hashHistory}>
                <Route path="/courses/:courseId/lessons" component={Lessons}/>
                <Route path="/lessons/:lessonId/codes" component={Codes}/>
                <Route path="/codes/:codeId/:order" component={PythonBoard}/>
                <Route path="*" exact={true} component={App_404}/>
            </Router>
        </div>
    </Provider>,
    document.getElementById('app')
)
