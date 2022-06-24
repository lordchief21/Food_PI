import {createStore, applyMiddleware} from 'redux'; //AHora REDUX recomienda el configureStore from @redux/toolkit
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

