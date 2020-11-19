import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

// applyMiddleware es una function que recibe todos los middleware (similar a connect de REDUX)

const store = createStore (
    rootReducer,
    applyMiddleware(thunk) // thunk lo que hace es agarrar todas las peticiones asincronas, y las resuelve, y
                           // una vez resueltas las devuelve
);



export default store;