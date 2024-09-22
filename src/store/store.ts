import { createStore, combineReducers } from "redux"

// Reducers

import reduce1 from './reducers/reduce1'

import reduce2 from "./reducers/reduce2"

//

const reducers = combineReducers({
    products: reduce1,
    basket: reduce2
})

const store: any = createStore(reducers)

export default store