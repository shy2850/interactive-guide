import React from 'react'
import ReactDOM from 'react-dom'
import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducer from './reducer/index'
import {init} from './reducer/shell'
import EditorApp from './components/EditorApp'
const store = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer)
store.dispatch(init())

ReactDOM.render(
    <Provider store={store}>
        <EditorApp/>
    </Provider>,
    document.getElementById('app')
)
