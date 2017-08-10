import React from 'react'
import ReactDOM from 'react-dom'
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer/index'
import Editor from './components/ShellEditor'
const store = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Editor value={`$ npm install`} />
    </Provider>,
    document.getElementById('app')
)
