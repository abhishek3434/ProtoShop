import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

const middleware=[];

if(process.env.NODE_ENV==='development'){
    middleware.push(logger);
}

const store=createStore(rootReducer,applyMiddleware(...middleware));

const persist=persistStore(store);

const finalExport={
    store,
    persist
}

export default finalExport;





