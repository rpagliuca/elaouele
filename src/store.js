import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer';
import { createWebsocketMiddleware } from "redux-websocket-middleware"

const socketMiddleware = createWebsocketMiddleware({
});

export default () => createStore(
    rootReducer,
    applyMiddleware(thunk, socketMiddleware)
);
