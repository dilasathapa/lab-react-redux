import {applyMiddleware, legacy_createStore as createStore} from "redux"
import myreducer from "./reducer";
import { logger } from 'redux-logger'

const mystore = createStore(myreducer, applyMiddleware(logger));

export default mystore;