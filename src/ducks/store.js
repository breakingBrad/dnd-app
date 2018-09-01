import { createStore } from 'redux';
import wizardReducer from './reducers/wizardReducer';
import userReducer from './reducers/userReducer';
import characterReducer from './reducers/characterReducer';


export default createStore(wizardReducer, userReducer, characterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());