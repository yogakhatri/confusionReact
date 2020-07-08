import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes'
import { Leaders } from './leaders'
import { Promotions } from './promotions'
import { Comments } from './comments'
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            promotions: Promotions,
            leaders: Leaders,
            comments: Comments,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}
