import { combineReducers } from 'redux';
import cards from './cards-reducer';
import uiCards from './ui-cards';

export default combineReducers({
    cards,
    uiCards
});
