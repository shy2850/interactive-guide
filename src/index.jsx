import React from 'react'
import ReactDOM from 'react-dom'
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer/index'
import Editor from './components/editor'
const store = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Editor value={`function myScript () {\n\treturn 200;\n}\n`} mode="javascript" />
    </Provider>,
    document.getElementById('app')
)
